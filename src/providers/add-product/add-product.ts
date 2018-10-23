import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from '../../pages/class/Offer';

 
@Injectable()
export class AddProductProvider {

  private lien = "https://wastless.herokuapp.com/AddProduct";

  constructor(public http: HttpClient) {
    console.log('Hello AddProductProvider Provider');
  }

  AddProduct(product: Offer){
   return this.http.post<any>(this.lien, product);
  }

}
