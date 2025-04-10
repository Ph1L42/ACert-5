import {Injectable, signal} from '@angular/core';
import {Movie} from "../model/movie.model";


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  movies = signal<Movie[]>([])

}
