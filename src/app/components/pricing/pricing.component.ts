import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  isAnnualBilling = false;

  toggleBillingPlan(): void {
    this.isAnnualBilling = !this.isAnnualBilling;
  }

  getCardRotationClass(cardNumber: number): string {
    return this.isAnnualBilling ? 
      (cardNumber === 1 ? '-rotate-y-180' : 
       cardNumber === 2 ? '-rotate-y-180' : 
       '-rotate-y-180') : 
      'rotate-y-0';
  }

  getBackCardRotationClass(cardNumber: number): string {
    return this.isAnnualBilling ? 
      (cardNumber === 1 ? 'rotate-y-0' : 
       cardNumber === 2 ? 'rotate-y-0' : 
       'rotate-y-0') : 
      'rotate-y-180';
  }
}
