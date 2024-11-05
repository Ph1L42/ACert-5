import {Injectable, signal} from '@angular/core';
import {Movie} from "../model/movie.model";


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites = signal<Movie[]>([])

  // add/remove movies from favorite list
  toggleFavorite(movie: Movie) {
    if (this.isFavorite(movie)) {
      this.favorites.update(f => f.filter(
        f => f.id !== movie.id
      ))
    } else {
      this.favorites.update(f => [...f, movie]);
    }
  }

  //check if a movie is favorite
  isFavorite(movie: Movie): boolean {
    return this.favorites().some(
      f => f.id === movie.id
    )
  }

}
