import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class GetProductsProvider {

  private lien = 'https://wastless.herokuapp.com/ProductSearch?ProductName=';

  constructor(public http: HttpClient) { }

  GetProducts(product: string, page: number){

    const lienSerch = this.lien+product+'&Page='+page
    return this.http.get<any>(lienSerch);

  }

}
