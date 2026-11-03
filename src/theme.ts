import { ThemeMode } from './types.js';

const STORAGE_KEY = 'morent-theme';

/**
 * Initializes and manages Dark / Light theme state
 */
export class ThemeManager {
  private currentTheme: ThemeMode = 'light';
  private toggleControls: NodeListOf<HTMLElement>;

  constructor() {
    this.toggleControls = document.querySelectorAll('.theme-switch-control');
    this.init();
  }

  private init(): void {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }

    this.toggleControls.forEach(control => {
      control.addEventListener('click', () => this.toggleTheme());
      control.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleTheme();
        }
      });
    });
  }

  public setTheme(mode: ThemeMode): void {
    this.currentTheme = mode;
    if (mode === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem(STORAGE_KEY, mode);
    this.updateUI();
  }

  public toggleTheme(): void {
    const nextMode: ThemeMode = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextMode);
  }

  private updateUI(): void {
    const isDark = this.currentTheme === 'dark';
    document.querySelectorAll<HTMLElement>('.theme-switch-btn').forEach(btn => {
      const mode = btn.getAttribute('data-mode');
      if ((mode === 'dark' && isDark) || (mode === 'light' && !isDark)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}

