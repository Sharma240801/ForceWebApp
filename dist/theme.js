const STORAGE_KEY = 'morent-theme';
/**
 * Initializes and manages Dark / Light theme state
 */
export class ThemeManager {
    currentTheme = 'light';
    toggleControls;
    constructor() {
        this.toggleControls = document.querySelectorAll('.theme-switch-control');
        this.init();
    }
    init() {
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            this.setTheme('dark');
        }
        else {
            this.setTheme('light');
        }
        this.toggleControls.forEach(control => {
            control.addEventListener('click', () => this.toggleTheme());
            control.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleTheme();
                }
            });
        });
    }
    setTheme(mode) {
        this.currentTheme = mode;
        if (mode === 'dark') {
            document.body.classList.add('dark-theme');
        }
        else {
            document.body.classList.remove('dark-theme');
        }
        localStorage.setItem(STORAGE_KEY, mode);
        this.updateUI();
    }
    toggleTheme() {
        const nextMode = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(nextMode);
    }
    updateUI() {
        const isDark = this.currentTheme === 'dark';
        document.querySelectorAll('.theme-switch-btn').forEach(btn => {
            const mode = btn.getAttribute('data-mode');
            if ((mode === 'dark' && isDark) || (mode === 'light' && !isDark)) {
                btn.classList.add('active');
            }
            else {
                btn.classList.remove('active');
            }
        });
    }
}
//# sourceMappingURL=theme.js.map