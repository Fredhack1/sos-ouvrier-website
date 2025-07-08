import { Component } from '@angular/core';
import { PricingCardComponent } from './pricing-card/pricing-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [PricingCardComponent, CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  isYearly: boolean = false;

  togglePlan(event: any) {
    this.isYearly = event.target.checked;
  }

  plans = [
    {
      monthlyPrice: 2000,
      yearlyPrice: 12000,
      title: 'Particulier',
      description: 'For Beginner Who Want To Scale Business Globaly',
      features: [
        { label: 'Expense Management', available: true },
        { label: 'Card Management', available: true },
        { label: 'Instant Statistics', available: false },
        { label: 'Bookmark Fonction', available: false },
        { label: 'Accounting System', available: false }
      ]
    },
    {
      monthlyPrice: 5000,
      yearlyPrice: 25000,
      title: 'Société',
      description: 'For Beginner Who Want To Scale Business Globaly',
      features: [
        { label: 'Expense Management', available: true },
        { label: 'Card Management', available: true },
        { label: 'Instant Statistics', available: true },
        { label: 'Bookmark Fonction', available: true },
        { label: 'Accounting System', available: false }
      ]
    }
  ];
}
