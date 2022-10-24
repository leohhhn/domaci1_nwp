import { Component, OnInit } from '@angular/core';
import {Token} from '@angular/compiler';
import {TokenAuthService} from '../services/token-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  dandelionToken: string;

  constructor(private tokenAuthComponent: TokenAuthService) {
    this.dandelionToken='';
  }

  ngOnInit(): void {
  }

  setToken() {
    this.tokenAuthComponent.setToken(this.dandelionToken);
  }

}
