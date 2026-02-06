import { Component } from '@angular/core';
import { nbaDashboardService } from './nba.dashboard.service'
import { playerList } from './nba.dashboard.interface';

@Component({
  selector: 'app-nda.dashboard',
  imports: [],
  templateUrl: './nda.dashboard.html',
  styleUrl: './nda.dashboard.css',
})
export class NdaDashboard {
  constructor(private service : nbaDashboardService) {}

  players:playerList[]=[]


  private getNbaPlayerList(){
    this.service.getNbaPlayerList().subscribe(res=>{
      this.players=res;
    })
  }
}
