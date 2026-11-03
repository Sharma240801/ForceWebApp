/**
 * Manages off-canvas responsive sliding navigation and filter drawers
 */
export declare class DrawerManager {
    private menuBtn;
    private filterBtn;
    private appSidebar;
    private filterSidebar;
    private overlay;
    constructor();
    private init;
    toggleAppSidebar(): void;
    toggleFilterSidebar(): void;
    closeAll(): void;
}
