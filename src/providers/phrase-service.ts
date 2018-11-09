import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PhraseService{

  public API = 'http://localhost:8080';
  public PHRASE_API = this.API + '/phrase';

  constructor(public http: HttpClient){

  }

  getPhrase(): Observable<any>{

    return this.http.get(this.PHRASE_API);
  }

  get(id: string) {
    return this.http.get(this.API + '/phrase/' + id);
  }

  sendAnswer(answer: string ,id: string){

    return this.http.post(this.API+ '/phrase/' + id + "?answer=" + answer,
      {
      },
      {
        headers: { 'Content-Type': 'application/json',
          'content-type':"application/x-www-form-urlencoded"}
      });


  }


}
