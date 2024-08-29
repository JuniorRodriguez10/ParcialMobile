import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Ipr } from 'src/app/home/interfaces/IPR';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment.prod';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public detilisProduct!: Ipr;

  constructor(
    private readonly HttpSrv: HttpService, 
    private readonly p: ActivatedRoute, 
    private readonly HttpCart: CarService,
    private toast: ToastController 
  ) { }

  async ngOnInit() {
    
    this.p.params.subscribe(async (p) => {
      const url = environment.URL_BASE + 'products/' + p['id'];
      try {
        this. detilisProduct = await this.HttpSrv.get<Ipr>(url);
        console.log(this. detilisProduct); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'added to cart',
      duration: 2000,
      position: 'top'
    });
    await toast.present();
    
    this.click();  // Llama a click() después de mostrar el toast
  }
  click() {
    console.log('Toast mostrado y función click() ejecutada');
  }
}
