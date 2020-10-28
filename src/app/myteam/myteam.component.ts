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
  public teams: TeamMember[];
  ngOnInit(): void {
    this.teams = this.teamService.getData();
    console.log(this.teams);
  }

  showModalDialog() {
    this.displayModal = true;
  }
}
