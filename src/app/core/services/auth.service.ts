import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token!: string;

  login(): void {
    this.token = "MyToken";
  }
  
  getToken(): string {
    return this.token;
  }

  constructor() { }
}
