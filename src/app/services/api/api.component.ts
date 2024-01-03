import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataFakeType, dataFake } from '../../data/dataFake';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private dataFake = dataFake;

  constructor() { }

  getDados(): Observable<DataFakeType[]> {
    return of(this.dataFake);
  }

  getDadosPorId(Id: string): Observable<DataFakeType | undefined> {
    const item = this.dataFake.find(data => data.id === Id);
    return of(item);
  }
}
