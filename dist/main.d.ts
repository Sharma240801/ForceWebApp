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
export declare class MorentApp {
    theme: ThemeManager;
    drawer: DrawerManager;
    gallery: GalleryManager;
    favorites: FavoritesManager;
    priceSlider: PriceSliderManager;
    reviews: ReviewsManager;
    dashboard: DashboardManager;
    constructor();
}
