import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Supplier } from '../../classes/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  baseUrl: string = 'http://localhost:3000/api/supplier';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Supplier[]>(`${ this.baseUrl }`)
      .pipe(
        map(resp => {
          return resp;
        }),
        catchError(error => of(error))
      );
  }

  post(supplier: Supplier) {
    return this.http.post<Supplier>(`${ this.baseUrl }`, supplier)
      .pipe(
        map(resp => {
          return resp;
        }),
        catchError(error => of(error))
      );
  }

}
