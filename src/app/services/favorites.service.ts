import {Injectable, signal} from '@angular/core';
import {Movie} from "../model/movie.model";


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites = signal<Movie[]>([]);

  toggleFavorite(movie: Movie) {
    if (this.isFavorite(movie)) {
      this.favorites.update(
        favs => favs.filter(
          fav => fav.id !== movie.id
        )
      )
    } else {
      this.favorites.update(favs => [...favs, movie])
    }
  }

  isFavorite(movie: Movie): boolean {
    return this.favorites().some(favorite => favorite.id === movie.id);
  }

}
