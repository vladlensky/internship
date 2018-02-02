import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MainService {

  constructor(private httpClient: HttpClient) { }

  public sendMessage(name: String, phone: String, email: String, textArea: String): Observable<any> {
    return this.httpClient.post('http://localhost:8000/', {name: name, phone: phone, email: email, textArea: textArea});
  }

  onPageLoad() {

  }
}
