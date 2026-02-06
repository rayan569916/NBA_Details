import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root',
})

export class nbaDashboardService{
    constructor(private http: HttpClient){}
    baseURL:string='http://127.0.0.1:5000/api';

    getNbaPlayerList(): Observable<any>{
        return this.http.get(`${this.baseURL}/nba/nba_player_list`)
    }
}