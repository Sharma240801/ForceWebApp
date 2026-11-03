/**
 * Price range slider with dynamic label and background gradient fill
 */
export class PriceSliderManager {
  private slider: HTMLInputElement | null;
  private displayLabel: HTMLElement | null;

  constructor() {
    this.slider = document.getElementById('priceRangeSlider') as HTMLInputElement | null;
    this.displayLabel = document.getElementById('priceDisplayLabel');

    this.init();
  }

  private init(): void {
    if (!this.slider || !this.displayLabel) return;

    const updateSlider = (): void => {
      if (!this.slider || !this.displayLabel) return;
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

