/**
 * Interactive product gallery thumbnail switcher
 */
export class GalleryManager {
    thumbButtons;
    heroImage;
    constructor() {
        this.thumbButtons = document.querySelectorAll('.thumb-preview-item');
        this.heroImage = document.getElementById('mainHeroCarImg');
        this.init();
    }
    init() {
        if (!this.thumbButtons.length || !this.heroImage)
            return;
        this.thumbButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetSrc = btn.getAttribute('data-img');
                if (!targetSrc || !this.heroImage)
                    return;
                // Active state
                this.thumbButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // Smooth image transition
                this.heroImage.style.opacity = '0';
                this.heroImage.style.transform = 'scale(0.96)';
                setTimeout(() => {
                    if (this.heroImage) {
                        this.heroImage.src = targetSrc;
                        this.heroImage.style.opacity = '1';
                        this.heroImage.style.transform = 'scale(1)';
                    }
                }, 150);
            });
        });
    }
}
//# sourceMappingURL=gallery.js.map