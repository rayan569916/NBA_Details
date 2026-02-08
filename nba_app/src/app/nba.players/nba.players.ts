import { Component } from '@angular/core';
import { playerList } from '../nda.dashboard/nba.dashboard.interface';
import { nbaDashboardService } from '../nda.dashboard/nba.dashboard.service';

@Component({
  selector: 'app-nba.players',
  imports: [],
  templateUrl: './nba.players.html',
  styleUrl: './nba.players.css',
})
export class NbaPlayers {
  
  constructor(private service : nbaDashboardService) {}

  players:playerList[]=[]
  
private getNbaPlayerList(){
  this.service.getNbaPlayerList().subscribe(res=>{
    this.players=res;
  })
}

}
