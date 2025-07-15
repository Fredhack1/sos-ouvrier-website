import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ScreenshotItem {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-app-screenshots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-screenshots.component.html',
  styleUrl: './app-screenshots.component.css'
})
export class AppScreenshotsComponent {
  loginScreenPath = 'assets/img/login-screen.png';
  homeScreenPath = 'assets/img/home-screen.png';
  drawerScreenPath = 'assets/img/drawer-screen.png';
  planScreenPath = 'assets/img/plan-screen.png';
  postScreenPath = 'assets/img/post-screen.png';
  statScreenPath = 'assets/img/stat-screen.png';

  screenshots: ScreenshotItem[] = [
    { src: this.postScreenPath, alt: 'Annonces' },
    // { src: this.loginScreenPath, alt: 'Login Screen' },
    { src: this.homeScreenPath, alt: 'Ecran d\'Accueil' },
    { src: this.statScreenPath, alt: 'Statistiques' },
    { src: this.drawerScreenPath, alt: 'Menu contextuel' },
    // { src: this.planScreenPath, alt: 'Plan Screen' },
  ];
}
