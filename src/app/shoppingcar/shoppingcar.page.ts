import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';


@Component({
  selector: 'app-shoppingcar',
  templateUrl: './shoppingcar.page.html',
  styleUrls: ['./shoppingcar.page.scss'],
})
export class ShoppingcarPage implements OnInit {

  constructor(
    private readonly important: CarService
  ) { }

public detilisProduct:any;

  ngOnInit() {
    this.detilisProduct= this.important.SeeProductSafe();
  }

}
