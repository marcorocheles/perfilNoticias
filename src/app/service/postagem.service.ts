import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) {}

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post')
  }

  

}
