import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required, Validators.minLength(10)]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;

    this.http.post<any>('/api/contact', this.contactForm.value).subscribe({
      next: () => {
        this.successMessage = '✅ Message envoyé avec succès !';
        this.contactForm.reset();
        this.submitted = false;
        this.loading = false;
        setTimeout(() => this.successMessage = '', 4000); // Toast auto-hide after 4 seconds
      },
      error: (error) => {
        this.errorMessage = '❌ Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.';
        setTimeout(() => this.errorMessage = '', 4000); // Toast auto-hide after 4 seconds
        // this.contactForm.reset();
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
