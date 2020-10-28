import { Component, OnInit } from '@angular/core';
import { ɵELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';
import { TeamService } from 'src/app/team.service';
import { TeamMember } from 'src/app/teammember.component';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  constructor(private teamService: TeamService) { }
  
  teamMember: TeamMember;
  empid = "";
  name = "";
  email = "";

  ngOnInit(): void {
  }

  log(x){
    // console.log(x);
  }
  
  onAddMember(x, y, z){
    console.log(x, y, z);
    this.teamMember = {
      "empid": z,
      "details": {
        "empid": z,
        "name": x,
        "email": y
      } 
    }
    this.teamService.addData(this.teamMember);
  }


}
