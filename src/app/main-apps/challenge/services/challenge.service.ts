import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor() { }

  private data = new Subject<any>();
  getData(): Observable<any> {
    return this.data.asObservable();
  }

  setData(data) {
    this.data.next(data);
  }



  private dataFilter = new Subject<any>();
  getDataFilter(): Observable<any> {
    return this.dataFilter.asObservable();
  }

  setDataFilter(dataFilter) {
    this.dataFilter.next(dataFilter);
  }


}
