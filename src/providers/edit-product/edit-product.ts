import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from '../../pages/class/Offer';

 
@Injectable()
export class EditProductProvider {

  private lien = 'https://wastless.herokuapp.com/EditProduct';

  constructor(public http: HttpClient) { 
  }

  public EditProduct(product: Offer){

   return this.http.post<any>(this.lien, product);

  }

}
