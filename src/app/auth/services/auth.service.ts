import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { UsuarioResponse } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:5001/api/auth";
  private _usuario!: UsuarioResponse;
  private _userRoles: string[] = [];

  get usuario() {
    const token = JSON.parse(atob((localStorage.getItem('token') as string).split('.')[1]));
    this._usuario = token.data;
    return this._usuario;
  }

  get userRoles(){
    const token = JSON.parse(atob((localStorage.getItem('token') as string).split('.')[1]));
    this._userRoles.push(token.data.userType);
    return this._userRoles;
  }

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = { username, password };

    return this.http.post<any>( `${this.baseUrl}/login`, body )
      .pipe(
        tap(resp => {
          localStorage.setItem('token', resp.body.accessToken);
        }),
        catchError(error => of(error))
      );
  }

  validarToken(): Observable<boolean> {

    return this.http.get<any>(`${this.baseUrl}/Login/RenovarToken`)
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
