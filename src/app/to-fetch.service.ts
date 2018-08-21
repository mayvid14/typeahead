import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToFetchService {
  URL = 'http://localhost:9090/store/';

  constructor(private http: HttpClient) { }

  getStores() {
    console.log(this.URL + 'getAll');
    return this.http.get(this.URL + 'getAll');
  }
}
