import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.scss']
})
export class MyteamComponent implements OnInit {

  constructor() { }
  displayModal: boolean;
  
  ngOnInit(): void {
  }

  showModalDialog() {
    this.displayModal = true;
  }
}
