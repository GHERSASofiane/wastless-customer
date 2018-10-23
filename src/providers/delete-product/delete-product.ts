import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable()
export class DeleteProductProvider {

  private lien = 'https://wastless.herokuapp.com/DeleteProduct?idProduct=';

  constructor(public http: HttpClient) {
    console.log('Hello DeleteProductProvider Provider');
  }

  public DeleteProduct(id: number){
    return this.http.delete<any>(this.lien+id);
  }

}
