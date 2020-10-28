import { Injectable } from '@angular/core';
import {TeamMember} from './teammember.component';

@Injectable({
  providedIn: 'root'
})

export class TeamService {

  constructor() {}
  private __data = [

    {
      "empid": "001",
      "details": {
        "empid": "001",
        "name": "Aradhana Singh",
        "email": "aradhana.singh@autorabit.com"
      }
    },

    {
      "empid": "002",
      "details": {
        "empid": "002",
        "name": "Rohit Srikar",
        "email": "rohit.srikar@autorabit.com"
      }
    },

    {
      "empid": "003",
      "details": {
        "empid": "003",
        "name": "Murtaza Sadriwala",
        "email": "murtazahussaini.sadriwala@autorabit.com"
      }
    },

  ];

  getData() {
    return this.__data;
  }

  addData(obj: TeamMember) {
    //validate obj
    this.__data.push(obj);
    console.log(this.__data);
  }
}
