import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Faq {
  question: string;
  answer: string;
  isOpen?: boolean;
}

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css']
})
export class FaqSectionComponent {
  faqs: Faq[] = [
    {
      question: "Quels types d'emplois puis-je trouver sur SOS Ouvrier ?",
      answer: "SOS Ouvrier se spécialise dans les postes à durée déterminée, y compris les rôles contractuels, les missions temporaires et le travail basé sur des projets dans divers secteurs d'activité.",
      isOpen: false
    },
    {
      question: "Comment créer un compte ?",
      answer: "Vous pouvez télécharger l'application mobile SOS Ouvrier depuis l'App Store ou Google Play Store et suivre le processus d'inscription simple pour créer votre compte.",
      isOpen: false
    },
    {
      question: "SOS Ouvrier est-il gratuit pour les demandeurs d'emploi ?",
      answer: "Oui, SOS Ouvrier est entièrement gratuit pour les demandeurs d'emploi afin de consulter les offres d'emploi, de créer des profils et de postuler à des postes.",
      isOpen: false
    },
    {
      question: "Comment les employeurs peuvent-ils publier des offres d'emploi sur SOS Ouvrier ?",
      answer: "Les employeurs peuvent s'inscrire via l'application ou notre portail web dédié (à venir) pour publier des offres d'emploi et gérer les candidatures. Des plans tarifaires spécifiques s'appliquent aux employeurs.",
      isOpen: false
    },
    {
      question: "Comment fonctionne le système de correspondance ?",
      answer: "Notre algorithme associe les candidats aux emplois en fonction de leurs compétences, de leur expérience, de leurs préférences et des exigences du poste spécifiées par les employeurs.",
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    // Ferme toutes les autres FAQs
    this.faqs.forEach((faq, i) => {
      if (i !== index) {
        faq.isOpen = false;
      }
    });
    
    // Ouvre/ferme la FAQ cliquée
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}