(() => {
// --- types.js ---
/**
 * MORENT Type Definitions
 */

//# sourceMappingURL=types.js.map
// --- theme.js ---
const STORAGE_KEY = 'morent-theme';
/**
 * Initializes and manages Dark / Light theme state
 */
class ThemeManager {
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
// --- drawer.js ---
/**
 * Manages off-canvas responsive sliding navigation and filter drawers
 */
class DrawerManager {
    menuBtn;
    filterBtn;
    appSidebar;
    filterSidebar;
    overlay;
    constructor() {
        this.menuBtn = document.querySelector('.mobile-menu-btn:not(.mobile-filter-toggle-btn)');
        this.filterBtn = document.querySelector('.mobile-filter-toggle-btn');
        this.appSidebar = document.querySelector('.app-sidebar');
        this.filterSidebar = document.querySelector('.filter-sidebar');
        this.overlay = document.querySelector('.sidebar-overlay');
        this.init();
    }
    init() {
        if (this.menuBtn && this.appSidebar) {
            this.menuBtn.addEventListener('click', () => this.toggleAppSidebar());
        }
        if (this.filterBtn && this.filterSidebar) {
            this.filterBtn.addEventListener('click', () => this.toggleFilterSidebar());
        }
        if (this.overlay) {
            this.overlay.addEventListener('click', () => this.closeAll());
        }
        // Close on Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAll();
            }
        });
    }
    toggleAppSidebar() {
        if (!this.appSidebar || !this.overlay)
            return;
        const isOpen = this.appSidebar.classList.toggle('open');
        this.overlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    toggleFilterSidebar() {
        if (!this.filterSidebar || !this.overlay)
            return;
        const isOpen = this.filterSidebar.classList.toggle('open');
        this.overlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    closeAll() {
        if (this.appSidebar)
            this.appSidebar.classList.remove('open');
        if (this.filterSidebar)
            this.filterSidebar.classList.remove('open');
        if (this.overlay)
            this.overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}
//# sourceMappingURL=drawer.js.map
// --- gallery.js ---
/**
 * Interactive product gallery thumbnail switcher
 */
class GalleryManager {
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
// --- favorites.js ---
/**
 * Favorite heart button state manager
 */
class FavoritesManager {
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
// --- slider.js ---
/**
 * Price range slider with dynamic label and background gradient fill
 */
class PriceSliderManager {
    slider;
    displayLabel;
    constructor() {
        this.slider = document.getElementById('priceRangeSlider');
        this.displayLabel = document.getElementById('priceDisplayLabel');
        this.init();
    }
    init() {
        if (!this.slider || !this.displayLabel)
            return;
        const updateSlider = () => {
            if (!this.slider || !this.displayLabel)
                return;
            const numVal = parseFloat(this.slider.value).toFixed(2);
            this.displayLabel.textContent = `Max. $${numVal}`;
            const min = parseFloat(this.slider.min) || 0;
            const max = parseFloat(this.slider.max) || 150;
            const current = parseFloat(this.slider.value);
            const percentage = ((current - min) / (max - min)) * 100;
            this.slider.style.background = `linear-gradient(to right, var(--primary) 0%, var(--primary) ${percentage}%, var(--border-light) ${percentage}%, var(--border-light) 100%)`;
        };
        this.slider.addEventListener('input', updateSlider);
        updateSlider();
    }
}
//# sourceMappingURL=slider.js.map
// --- reviews.js ---
/**
 * Expandable reviews accordion
 */
class ReviewsManager {
    toggleBtn;
    extraReviews;
    isExpanded = false;
    constructor() {
        this.toggleBtn = document.querySelector('.show-all-reviews-toggle');
        this.extraReviews = document.querySelectorAll('.review-item-card.extra-review');
        this.init();
    }
    init() {
        if (!this.toggleBtn || !this.extraReviews.length)
            return;
        this.toggleBtn.addEventListener('click', () => {
            this.isExpanded = !this.isExpanded;
            this.extraReviews.forEach(item => {
                item.style.display = this.isExpanded ? 'flex' : 'none';
            });
            const label = this.toggleBtn?.querySelector('span');
            const icon = this.toggleBtn?.querySelector('svg');
            if (label) {
                label.textContent = this.isExpanded ? 'Show Less' : 'Show All';
            }
            if (icon) {
                icon.style.transform = this.isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    }
}
//# sourceMappingURL=reviews.js.map
// --- dashboard.js ---
/**
 * Dashboard Chart and Stats Interactivity
 */
class DashboardManager {
    donutSegments;
    centerTotalText;
    centerCaptionText;
    originalTotal = '72,030';
    originalCaption = 'Rental Car';
    constructor() {
        this.donutSegments = document.querySelectorAll('.donut-segment');
        this.centerTotalText = document.querySelector('.donut-total-count');
        this.centerCaptionText = document.querySelector('.donut-stat-caption');
        this.init();
    }
    init() {
        if (!this.donutSegments.length || !this.centerTotalText || !this.centerCaptionText)
            return;
        this.originalTotal = this.centerTotalText.textContent?.trim() || '72,030';
        this.originalCaption = this.centerCaptionText.textContent?.trim() || 'Rental Car';
        this.donutSegments.forEach(segment => {
            segment.addEventListener('mouseenter', () => {
                const category = segment.getAttribute('data-name');
                const count = segment.getAttribute('data-count');
                if (this.centerTotalText && count) {
                    this.centerTotalText.textContent = count;
                }
                if (this.centerCaptionText && category) {
                    this.centerCaptionText.textContent = category;
                }
            });
            segment.addEventListener('mouseleave', () => {
                if (this.centerTotalText) {
                    this.centerTotalText.textContent = this.originalTotal;
                }
                if (this.centerCaptionText) {
                    this.centerCaptionText.textContent = this.originalCaption;
                }
            });
        });
    }
}
//# sourceMappingURL=dashboard.js.map
// --- main.js ---







/**
 * Main application bootstrap for MORENT
 */
class MorentApp {
    theme;
    drawer;
    gallery;
    favorites;
    priceSlider;
    reviews;
    dashboard;
    constructor() {
        this.theme = new ThemeManager();
        this.drawer = new DrawerManager();
        this.gallery = new GalleryManager();
        this.favorites = new FavoritesManager();
        this.priceSlider = new PriceSliderManager();
        this.reviews = new ReviewsManager();
        this.dashboard = new DashboardManager();
    }
}
// Bootstrap on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.morentApp = new MorentApp();
    });
}
else {
    window.morentApp = new MorentApp();
}
//# sourceMappingURL=main.js.map
})();
