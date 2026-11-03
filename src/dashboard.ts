/**
 * Dashboard Chart and Stats Interactivity
 */
export class DashboardManager {
  private donutSegments: NodeListOf<SVGCircleElement>;
  private centerTotalText: HTMLElement | null;
  private centerCaptionText: HTMLElement | null;
  private originalTotal: string = '72,030';
  private originalCaption: string = 'Rental Car';

  constructor() {
    this.donutSegments = document.querySelectorAll<SVGCircleElement>('.donut-segment');
    this.centerTotalText = document.querySelector<HTMLElement>('.donut-total-count');
    this.centerCaptionText = document.querySelector<HTMLElement>('.donut-stat-caption');

    this.init();
  }

  private init(): void {
    if (!this.donutSegments.length || !this.centerTotalText || !this.centerCaptionText) return;

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

