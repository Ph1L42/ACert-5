import {Component, inject, input, output} from '@angular/core';
import {Movie} from '../model/movie.model';
import {HighlightDirective} from "../highlight.directive";
import {FavoritesService} from "../services/favorites.service";

@Component({
  selector: 'app-movie-item',
  template: `
    <div appHighlight class="movie-item">
      <div>
        <h4>
          <span
            class="icon-star"
            [class.active]="isFavorite()"
            (click)="toggleFavorite.emit(movie())"
          ></span>
          {{ movie().title }}
        </h4>
        <small class="subtitle">
          <span>Release date: {{ movie().release_date }}</span>
          <span>Budget: $ {{ movie().budget }} million</span>
          <span>Duration: {{ movie().duration }} min</span>
        </small>
      </div>
      <button>Details</button>
    </div>
  `,
  standalone: true,
  imports: [
    HighlightDirective
  ],
  styleUrls: ['movie-item.component.scss']
})
export class MovieItemComponent {
  movie = input.required<Movie>();
  isFavorite = input<boolean>(false);
  toggleFavorite = output<Movie>();

}
