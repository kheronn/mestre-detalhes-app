import { Anime } from './anime.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://kitsu.io/api/edge/anime?page[limit]=10'
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Anime[]>(this.url)
  }

}
