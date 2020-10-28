import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { TeamMember } from '../teammember.component';

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.scss']
})
export class MyteamComponent implements OnInit {

  constructor(private teamService: TeamService) { }
  displayModal: boolean;
  displayMember: boolean;
  public teams: TeamMember[];
  public profile: TeamMember;
  ngOnInit(): void {
    this.teams = this.teamService.getData();
  }

  showModalDialog() {
    this.displayModal = true;
  }

  showMemberDialog(memberData: TeamMember){
    this.displayMember = true;
    this.profile = memberData;
    console.log(memberData);
  }

}
