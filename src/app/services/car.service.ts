import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public ProductSafe: any[]=[];


  constructor() { }

  SeeProductSafe():any{
    return this.ProductSafe;
  }

  retainNewProduct(products:any){
    this.ProductSafe.push(products);
  }
}
