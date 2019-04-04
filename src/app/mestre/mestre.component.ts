import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Anime } from '../anime.interface';

@Component({
  selector: 'app-mestre',
  templateUrl: './mestre.component.html',
  styleUrls: ['./mestre.component.css']
})
export class MestreComponent implements OnInit {

  list: Anime[]

  constructor(private api: ApiService, private dataService: DataService, private router: Router) {

  }
  ngOnInit(): void {
    this.api.getData()
      .subscribe((response: any) => {
        this.list = response.data;
        console.log(this.list)
      })
  }

  goToDetalhesByService(anime: Anime) {
    this.dataService.setAnime(anime);
    this.router.navigateByUrl('/detalhes')
  }

  goToDetalhesByState(anime: Anime) {
    this.router.navigateByUrl('/detalhes', {
      state: { anime: anime }
    })
  }

}
