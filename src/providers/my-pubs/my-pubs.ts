import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 
@Injectable()
export class MyPubsProvider {

private lien = 'https://wastless.herokuapp.com/MyPubs?idUser=';

  constructor(public http: HttpClient) {
    console.log('Hello MyPubsProvider Provider');
  }

  public MyPubs(id: number){
    return this.http.get<any>(this.lien+id);
  }

}
