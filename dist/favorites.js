/**
 * Favorite heart button state manager
 */
export class FavoritesManager {
    favButtons;
    constructor() {
        this.favButtons = document.querySelectorAll('.fav-btn');
        this.init();
    }
    init() {
        this.favButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
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
//# sourceMappingURL=favorites.js.map