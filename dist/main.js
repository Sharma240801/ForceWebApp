import { ThemeManager } from './theme.js';
import { DrawerManager } from './drawer.js';
import { GalleryManager } from './gallery.js';
import { FavoritesManager } from './favorites.js';
import { PriceSliderManager } from './slider.js';
import { ReviewsManager } from './reviews.js';
import { DashboardManager } from './dashboard.js';
/**
 * Main application bootstrap for MORENT
 */
export class MorentApp {
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