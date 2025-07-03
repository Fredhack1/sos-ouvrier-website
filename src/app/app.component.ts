import { Component } from '@angular/core';
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
  title = 'sos-ouvrier';
}
