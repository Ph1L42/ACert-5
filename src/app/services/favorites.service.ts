import {Injectable, signal} from '@angular/core';
import {Movie} from "../model/movie.model";


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites = signal<Movie[]>([]);

  isFavorite(movie: Movie): boolean {
    return this.favorites().some(
      favorite => favorite.id === movie.id
    );
  }

  toggleFavorite(movie: Movie) {
    if (this.isFavorite(movie)) {
      this.favorites.update(
        favorite => favorite.filter(
          favorite => favorite.id !== movie.id
        )
      );
    } else {
      this.favorites.update(favorites => [...favorites, movie])
    }
  }

}
