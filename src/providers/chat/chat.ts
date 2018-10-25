import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../../pages/class/Chat';
 
@Injectable()
export class ChatProvider {

  private lien = "https://wastless.herokuapp.com/Chat";
  private lienConfirme = "https://wastless.herokuapp.com/ChatConfirme"; 

  constructor(public http: HttpClient) {
    console.log('Hello ChatProvider Provider');
  }

  public GetMessages(id: number){
    return this.http.get<any>(this.lien+"ProductId"+id);
  }


  public AddMessage(Message: Chat){
    return this.http.post<any>(this.lien,{Chat: Message});
  }

  public Confirme(Message: Chat){
    return this.http.post<any>(this.lienConfirme,{Chat: Message});
  }

}
