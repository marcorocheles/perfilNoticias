import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  idPostagem: number

  constructor(
    private router: Router,
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

  findByIdPostagem(){
    this.postagemService.getByIdPostagem(this.idPostagem).subscribe((resp: Postagem) =>{
      this.postagem = resp
    })
  }

  publicar(){
    this.postagem.id = this.idPostagem
    
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })

  }

}
