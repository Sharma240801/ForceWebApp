/**
 * Manages off-canvas responsive sliding navigation and filter drawers
 */
export class DrawerManager {
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