import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent {
  @Input() show = true;
  logoPath = 'assets/img/logo-png.png';
}
