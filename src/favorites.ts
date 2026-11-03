/**
 * Favorite heart button state manager
 */
export class FavoritesManager {
  private favButtons: NodeListOf<HTMLButtonElement>;

  constructor() {
    this.favButtons = document.querySelectorAll<HTMLButtonElement>('.fav-btn');
    this.init();
  }

  private init(): void {
    this.favButtons.forEach(btn => {
      btn.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        const isActive = btn.classList.toggle('active');

        // Micro-bounce
        btn.style.transform = 'scale(1.25)';
        setTimeout(() => {
          btn.style.transform = '';
        }, 180);

        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
    });
  }
}

