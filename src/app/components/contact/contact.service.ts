import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class ContactService {
  private baseUrl = `${environment.apiBaseUrl}/api/contact`;
  constructor(private http: HttpClient) {}
  sendMessage(payload: { name: string; email: string; message: string }) {
    return this.http.post(this.baseUrl, payload);
  }
}
