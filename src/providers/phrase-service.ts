import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PhraseService{

  public API = 'http://localhost:8080';
  public PHRASE_API = this.API + '/phrases';

  constructor(public http: HttpClient){

  }

  getPhrases(): Observable<any>{

    return this.http.get(this.PHRASE_API);
  }

  get(id: string) {
    return this.http.get(this.API + '/phrase/' + id);
  }


}
