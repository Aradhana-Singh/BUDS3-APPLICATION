import { Component, OnInit } from '@angular/core';
import learnings_data from '../__files/budsFiles';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor() { }

  public learnings  = learnings_data.property;

  ngOnInit(): void {
  }
}
