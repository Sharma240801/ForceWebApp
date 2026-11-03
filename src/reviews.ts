/**
 * Expandable reviews accordion
 */
export class ReviewsManager {
  private toggleBtn: HTMLButtonElement | null;
  private extraReviews: NodeListOf<HTMLElement>;
  private isExpanded: boolean = false;

  constructor() {
    this.toggleBtn = document.querySelector<HTMLButtonElement>('.show-all-reviews-toggle');
    this.extraReviews = document.querySelectorAll<HTMLElement>('.review-item-card.extra-review');

    this.init();
  }

  private init(): void {
    if (!this.toggleBtn || !this.extraReviews.length) return;

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

