import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  constructor(
    private postagemService: PostagemService
  ) { }

  ngOnInit(){
    
    window.scroll(0,0)
    this.getAllPostagens();

  }

  
  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

}
