import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenAuthService {

  private dandelionToken: string;

  constructor() {
    this.dandelionToken = '';
  }

  setToken(input: string): void {
    this.dandelionToken = input;
  }

  getToken(): string {
    return this.dandelionToken;
  }

}
