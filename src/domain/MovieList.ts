import { Movie } from "./Movie";

export class MovieList {
  private movies: Movie[] = [];

  add(movie: Movie): void {
    this.movies.push(movie);
  }

  getAll(): Movie[] {
    return [...this.movies];
  }
}
