import {Component} from '@angular/core';
import {TokenAuthService} from './services/token-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dz1';

  constructor(private tokenAuthService: TokenAuthService) {
  }


  getToken() {
    return this.tokenAuthService.getToken();
  }

}
