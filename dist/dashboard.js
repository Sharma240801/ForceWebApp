/**
 * Dashboard Chart and Stats Interactivity
 */
export class DashboardManager {
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