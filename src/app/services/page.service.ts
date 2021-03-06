import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PageService {

  constructor(private http: HttpClient) { }

  public pagesBS = new BehaviorSubject<Object>(null);

  getPages() {
    return this.http.get('http://localhost:60438/api/pages');
  }

  getPage(slug) {
    return this.http.get('http://localhost:60438/api/pages/' + slug);
  }

  postAddPage(value) {
    return this.http.post('http://localhost:60438/api/pages/create', value);
  }

  getEditPage(id) {
    return this.http.get('http://localhost:60438/api/pages/edit/'+ id );
  }

  putEditPage(value) {
    return this.http.put('http://localhost:60438/api/pages/edit/' + value.id, value);
  }

}
