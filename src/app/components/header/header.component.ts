import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  link: string;
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  logoPath = 'assets/img/logo-png.png';
  job = 'assets/img/job.png';
  case = 'assets/img/case.png';

  navItems: NavItem[] = [
    { link: '#home', label: 'Home' },
    { link: '#about', label: 'About' },
    { link: '#popular', label: 'Popular' },
    { link: '#review', label: 'Review' }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleNavClick(event: Event, fragment: string): void {
    this.isMenuOpen = false;
    if (fragment.startsWith('#')) {
      event.preventDefault();
      document.querySelector(fragment)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  downloadApp(): void {
    // Logique de téléchargement
    console.log('Download initiated');
  }

  @HostListener('window:resize')
  onResize(): void {
    // Ferme le menu quand l'écran est agrandi au delà de lg
    if (window.innerWidth >= 1024) {
      this.isMenuOpen = false;
    }
  }

}
