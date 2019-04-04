import { Anime } from '../anime.interface';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router, Navigation } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  anime: Anime;

  constructor(private dataService: DataService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.anime = nav.extras.state.anime;
  }

  ngOnInit(): void {
    if (!this.anime) // Não existe com a abordagem do status, recupoera do service
    {
      this.anime = this.dataService.getAnime()
    }
  }



}
