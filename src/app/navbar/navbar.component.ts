import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                routerLink: ['/home']
            },
            {
                label: 'Library',
                routerLink: ['/library']
            },
            {
              label: 'Contact us',
              routerLink: ['/contact-us']
            }
        ];
    }

}
