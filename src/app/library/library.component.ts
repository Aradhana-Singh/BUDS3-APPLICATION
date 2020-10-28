import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor() { }

  public learnings = [
    {
        weekno: 0,
        buds: [
            {
                budsno: 1,
                items: [{label: "DevOps PPT", url:""}, {label: "DevOps recording", url:""}]
            }
        ]
    }
  ];

  ngOnInit(): void {
  }

}
