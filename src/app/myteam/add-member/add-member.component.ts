import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ɵELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';
import { TeamService } from 'src/app/team.service';
import { TeamMember } from 'src/app/teammember.component';
import { emailValidator, empidValidator, phonevalidator } from "src/app/myteam/add-member/validators";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
  form: FormGroup;
  constructor(private teamService: TeamService,
              private fb:FormBuilder) { 
                this.form = this.fb.group({
                  name:['',[Validators.required,Validators.minLength(4)]],
                  empid:['', [Validators.required,empidValidator]],
                  email:['', emailValidator],
                  phone:['', phonevalidator],
                  designation: '',
                  experience:'',
                  skills:'',
                  address:'',
                  bio:'',
                  github:'',
                  facebook:'',
                  linkedin:''
                })
              }

  
  
  teamMember: TeamMember;
  empid = "";
  name = "";
  email = "";
  address = "";
  phone = "";
  designation = "";
  experience = "";
  skills = "";
  bio = "";
  facebook = "";
  github = "";
  linkedin = "";
  ngOnInit(): void {
  }

  log(x){
    // console.log(x);
  }
  
  onAddMember(name,empid,email,address,phone,designation,experience,skills,bio,facebook,github,linkedin){
    // console.log(x, y, z);
    console.log(this.form.value);
    console.log(this.name);
    console.log(name,empid,email,address,phone,designation,experience,skills,bio,facebook,github,linkedin);
    this.teamMember = {
      "empid": empid,
      "name": name,
      "email": email,
      "address": address,
      "phone": phone,
      "designation": designation,
      "experience": experience,
      "skills": skills,
      "bio": bio,
      "facebook": facebook,
      "github": github,
      "linkedin": linkedin
      }
      this.teamService.addMember(empid,name,email,designation,phone,address,skills,bio,facebook,github,linkedin,experience);

      // "details": {
      //   "empid": empid,
      //   "name": name,
      //   "email": email
      }
      
      // onSubmit(){
      //   console.log(this.form.value);
      //   console.log(this.empid,"hello");
      //   this.teamService.addMember(this.empid,this.name,this.email,this.designation,this.phone,this.address,this.skills,this.bio,this.facebook,this.github,this.linkedin,this.experience);
      //   this.form.markAsTouched();
      // }
    }
    // this.teamService.addData(this.teamMember);



