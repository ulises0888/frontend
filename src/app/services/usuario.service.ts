import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = 'https://backend-b5io.onrender.com/api/usuarios/';
  UL = 'https://backend-b5io.onrender.com/api/libro/';
  URE = 'https://backend-b5io.onrender.com/api/editorial/';
  URG = 'https://backend-b5io.onrender.com/api/genero/';
  URA = 'https://backend-b5io.onrender.com/api/autor/';

  constructor(private http: HttpClient) { }

  fetchUser(): Observable<any[]> {
    return this.http.get<any[]>(this.URL);
  }

  postUser(user:any):Observable<any>{
    return this.http.post<any>(this.URL,user);
  }

  //createUsers(user: any): Observable<any> {
   // return this.http.post<any>(this.URC, user); // Especifica el tipo de retorno
  //}


  updateUser(id_usuario: string, usuario: any) {
    return this.http.put(`${this.URL}${id_usuario}`, usuario);
  }

  deleteUser(id_usuario: string): Observable<any> {
    return this.http.delete<any>(`${this.URL}${id_usuario}`); // Especifica el tipo de retorno
  }
  //Libro
  fetchLibro(): Observable<any[]> {
    return this.http.get<any[]>(this.UL);
  }
  //Editorial
  fetchEditorial(): Observable<any[]> {
    return this.http.get<any[]>(this.URE);
  }
  postEditorial(user:any):Observable<any>{
    return this.http.post<any>(this.URE,user);
  }
  //Genero
  fetchGenero(): Observable<any[]> {
    return this.http.get<any[]>(this.URG);
  }
  postGenero(user:any):Observable<any>{
    return this.http.post<any>(this.URG,user);
  }
  //Autor
  fetchAutor(): Observable<any[]> {
    return this.http.get<any[]>(this.URA);
  }
  postAutor(user:any):Observable<any>{
    return this.http.post<any>(this.URA,user);
  }
}
