import { Injectable } from '@angular/core';
import {TeamMember} from './teammember.component';

@Injectable({
  providedIn: 'root'
})

export class TeamService {

  constructor() {}
  __data = [

    {
      "empid": "001",
      "name": "Aradhana Singh",
      "email": "aradhana.singh@autorabit.com",
      "designation": "Software Developer",
      "phone": "1234567890",
      "address": "Dummy-Address#1",
      "skills": "JAVA,Python",
      "bio": "Chess Player",
      "experience": "1 month",
      "facebook": "facebook.com/aradhana",
      "github": "github.com/aradhana",
      "linkedin": "linkedin.com/aradhana"
      },

    {
      "empid": "002",
      "name": "Rohit Srikar",
      "email": "rohit.srikar@autorabit.com",
      "designation": "Software Developer",
      "phone": "1234567890",
      "address": "Dummy-Address#2",
      "skills": "IOT, Robotics",
      "bio": "Audiophile",
      "experience": "1 month",
      "facebook": "facebook.com/rohit",
      "github": "github.com/rohit",
      "linkedin": "linkedin.com/rohit"
    },

    {
      "empid": "003",
      "name": "Murtaza Hussaini",
      "email": "murtazahussaini.sadriwala@autorabit.com",
      "designation": "Software Developer",
      "phone": "1234567890",
      "address": "Dummy-Address#3",
      "skills": "Node.js",
      "bio": "Travelling? Idk",
      "experience": "1 month",
      "facebook": "facebook.com/Murtuza",
      "github": "facebook.com/Murtuza",
      "linkedin": "linkedin.com/Murtuza"
    },

  ];

  getData() {
    return this.__data;
  }

  // addData(obj: TeamMember) {
  //   //validate obj
  //   this.__data.push(obj);
  //   console.log(this.__data);
  // }
  addMember(empid:string,name:string,email:string,designation:string,phone:string,address:string,skills:string,bio:string,facebook:string,github:string,linkedin:string, experience: string){
    this.__data.push({empid: empid,name: name,email: email,designation: designation,phone: phone,address: address,skills: skills, bio: bio, facebook: facebook, github: github, linkedin: linkedin, experience: experience});
  }
}
