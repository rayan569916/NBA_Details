import { Component, OnInit } from '@angular/core';
import { nbaDashboardService } from './nba.dashboard.service'
import { playerList } from './nba.dashboard.interface';

@Component({
  selector: 'app-nda.dashboard',
  imports: [],
  templateUrl: './nda.dashboard.html',
  styleUrl: './nda.dashboard.css',
})
export class NdaDashboard implements OnInit{
  constructor(private service : nbaDashboardService) {}

  ngOnInit(){
    this.getPlayerTeamImage()
  }

  players:playerList[]=[]

  getPlayerTeamImage(){
    const nbaPlayerId=1630173;
    this.service.getNbaTeamImage(nbaPlayerId).subscribe(res=>{
      console.log(res)
    })
  }


  getPlayerImage(){
    const nbaPlayerId=1630173;
    return `https://cdn.nba.com/headshots/nba/latest/520x380/${nbaPlayerId}.png`
  }
}
