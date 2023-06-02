import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:5001/api/auth";
  private _usuario!: Usuario;
  private prueba!: any;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = { username, password };

    return this.http.post<any>( `${this.baseUrl}/login`, body )
      .pipe(
        tap(resp => {
          console.log(resp)
          localStorage.setItem('token', resp.body.accessToken);

          this.prueba = resp
        }),
        catchError(error => of(error))
      );
  }

  validarToken(): Observable<boolean> {

    return this.http.get<Usuario>(`${this.baseUrl}/Login/RenovarToken`)
      .pipe(
        map(resp => {
          localStorage.setItem('token', resp.token);
          this._usuario = resp
            return true;
        }),
        catchError( err => of(false))
      );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
