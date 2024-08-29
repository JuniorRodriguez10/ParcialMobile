import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment.prod';
import { Ipr } from './interfaces/IPR';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public save: Ipr []=[];
  url =environment.URL_BASE + 'products';

  
  constructor(
    private readonly httpSrv: HttpService, 
    private readonly navCtr: NavController) {}

  async ngOnInit(){
    this.save = await this.httpSrv.get<Ipr[]>(this.url)
   
      
  }
  
  public doNavigate(id: number){
    console.log (id);
    
    this.navCtr.navigateForward('details/' + id);
  }

  async onOptionSelected(event: any) {
      this.save = await this.httpSrv.get<Ipr[]>(this.url + '/category/' + event.detail.value);
     
  }

}

