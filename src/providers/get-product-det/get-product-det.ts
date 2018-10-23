import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable()
export class GetProductDetProvider {

  private lien: string = 'https://wastless.herokuapp.com/ProductDetail?ProductId=';

  constructor(public http: HttpClient) {
    console.log('Hello GetProductDetProvider Provider');
  }

  public GetProductDetails(id: string){

    return this.http.get<any>(this.lien+id);

  }

}
