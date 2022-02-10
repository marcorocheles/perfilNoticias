import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { NoticiasService } from '../service/noticias.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent implements OnInit {

  postagemNoticia: Postagem = new Postagem()
  listaPostagens: Postagem[]
  idPostagem: number

  constructor(
    private noticiasService: NoticiasService,
    private router: Router
    ) { }

  ngOnInit(){
    
    window.scroll(0,0)
    this.getAllPostagens();

  }

  getAllPostagens(){
    this.noticiasService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  
  publicar(){
    this.noticiasService.postPostagem(this.postagemNoticia).subscribe((resp: Postagem) => {
      this.postagemNoticia = resp
      alert('Notícia postada com sucesso!')
      this.postagemNoticia = new Postagem()
      this.getAllPostagens()
    })

  }

}
