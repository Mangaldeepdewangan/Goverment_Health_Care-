import { Component, OnInit } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.clear();
  }

}
