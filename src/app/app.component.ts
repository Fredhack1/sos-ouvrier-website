import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { AppScreenshotsComponent } from './components/app-screenshots/app-screenshots.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { TestimoialsComponent } from './components/testimoials/testimoials.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PricingComponent } from './components/pricing/pricing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    HomeComponent,
    FeaturesComponent,
    AppScreenshotsComponent,
    HowItWorksComponent,
    TestimoialsComponent,
    PricingComponent,
    FaqSectionComponent,
    DownloadAppComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  scrollTopVisible = false;
  scrollProgress = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    this.scrollProgress = (scrollTop / docHeight) * 100;
    this.scrollTopVisible = scrollTop > 100; // Afficher le bouton "scroll to top" après 100px de défilement
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
