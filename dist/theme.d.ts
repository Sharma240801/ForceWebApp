import { ThemeMode } from './types.js';
/**
 * Initializes and manages Dark / Light theme state
 */
export declare class ThemeManager {
    private currentTheme;
    private toggleControls;
    constructor();
    private init;
    setTheme(mode: ThemeMode): void;
    toggleTheme(): void;
    private updateUI;
}
