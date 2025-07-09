import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.css']
})
export class PricingCardComponent {
  @Input() isYearly: boolean = false;

  @Input() monthlyPrice!: number;
  @Input() yearlyPrice!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() yearlyDescription!: string;
  @Input() features!: { label: string, available: boolean }[];
}
