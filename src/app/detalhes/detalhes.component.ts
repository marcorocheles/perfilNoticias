import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Postagem } from '../model/Postagem';
import { NoticiasService } from '../service/noticias.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  postagem: Postagem = new Postagem()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private noticiasService: NoticiasService,
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
  }


  findByIdPostagem(id: number){
    this.noticiasService.getByIdPostagem(id).subscribe((resp: Postagem) => {
    this.postagem = resp
    })
  }

}
