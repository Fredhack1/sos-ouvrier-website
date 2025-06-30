import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
}

@Component({
  selector: 'app-testimoials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimoials.component.html',
  styleUrl: './testimoials.component.css'
})
export class TestimoialsComponent {

  testimonials: Testimonial[] = [
    {
      quote: "SOS Ouvrier m'a aidé à trouver un CDD fantastique en seulement une semaine ! L'application est très intuitive.",
      name: "Alfred Tchinda",
      title: "DevOps Engineer",
      avatar: "https://placehold.co/60x60.png",
      rating: 4
    },
    {
      quote: "En tant qu’employeur, SOS Ouvrier a rendu incroyablement facile la recherche de candidats qualifiés pour notre projet à court terme.",
      name: "Valdes Ngoumlack",
      title: "Software Engineer",
      avatar: "https://placehold.co/60x60.png",
      rating: 5
    },
    {
      quote: "L'accent mis sur les CDD est exactement ce dont j'avais besoin. Je recommande vivement SOS Ouvrier !",
      name: "Jires Nodem",
      title: "Programmer Analyst",
      avatar: "https://placehold.co/60x60.png",
      rating: 5
    }
  ]

}
