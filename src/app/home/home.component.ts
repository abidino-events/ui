import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient,
    protected readonly keycloak: KeycloakService) { }

  baseUrl = 'http://localhost:4650'

  getMailHealth() {
      this.http.get<any>(this.baseUrl + '/mail/health').subscribe(resp => {
        console.log(resp)
      })
  }
}
