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

  onSubmit(){
    console.log(this.form.value);
    this.form.markAsTouched();
  }
  
  teamMember: TeamMember;
  empid = "";
  name = "";
  email = "";

  ngOnInit(): void {
  }

  log(x){
    // console.log(x);
  }
  
  onAddMember(name, email, empid){
    // console.log(x, y, z);
    this.teamMember = {
      "empid": empid,
      "details": {
        "empid": empid,
        "name": name,
        "email": email
      } 
    }
    this.teamService.addData(this.teamMember);
  }


}
