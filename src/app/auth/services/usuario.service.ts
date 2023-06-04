import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = 'http://localhost:5001/api';

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Usuario[]>(`${ this.baseUrl }/user`)
      .pipe(
        map(resp => {
          return resp;
        }),
        catchError(error => of(error))
      );
  }

  post(usuario: Usuario) {
    return this.http.post<Usuario>(`${ this.baseUrl }/user`, usuario)
      .pipe(
        map(resp => {
          return resp;
        }),
        catchError(error => of(error))
      );
  }

}
