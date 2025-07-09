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
      description: 'Pensé pour les professionnels de terrain, cet abonnement vous donne un accès direct à des missions proches de chez vous, facilite la mise en relation avec les entreprises du BTP, et vous permet de rester actif sur les chantiers. Chaque mois, vous profitez d’outils conçus pour simplifier votre quotidien et trouver du travail plus rapidement.',
      yearlyDescription: 'Cet abonnement de 12 mois est destiné aux ouvriers du BTP. Il permet d’accéder à des services conçus pour faciliter la recherche de missions, rester en contact avec les chantiers actifs et trouver plus facilement du travail sur le terrain, tout au long de la période de souscription.',
      features: [
        { label: 'Lorem ipsum dolor sit amet', available: true },
        { label: 'Lorem ipsum dolor sit amet', available: true },
        { label: 'Lorem ipsum dolor sit amet', available: false },
        { label: 'Lorem ipsum dolor sit amet', available: false },
        { label: 'Lorem ipsum dolor sit amet', available: false }
      ]
    },
    {
      monthlyPrice: 5000,
      yearlyPrice: 25000,
      title: 'Société',
      description: 'Conçu pour les besoins concrets des chantiers, cet abonnement mensuel permet aux entreprises du BTP de publier des offres, de recruter rapidement des ouvriers qualifiés, et d’accéder à des services dédiés à la gestion des équipes sur le terrain. Une solution souple et efficace pour répondre aux besoins immédiats de main-d’œuvre.',
      yearlyDescription: 'Cet abonnement de 12 mois est pensé pour les entreprises du BTP. Il donne un accès complet à des services dédiés aux professionnels du chantier, y compris des outils pour faciliter le recrutement d’ouvriers et répondre rapidement aux besoins sur le terrain, tout au long de la souscription.',
      features: [
        { label: 'Lorem ipsum dolor sit amet', available: true },
        { label: 'Lorem ipsum dolor sit amet', available: true },
        { label: 'Lorem ipsum dolor sit amet', available: true },
        { label: 'Lorem ipsum dolor sit amet', available: true },
        { label: 'Lorem ipsum dolor sit amet', available: false }
      ]
    }
  ];
}
