import { describe, expect, it } from "vitest";
import { Movie } from "../domain/Movie";
import { MovieList } from "../domain/MovieList";

describe("MovieList", () => {
  it("empieza vacía", () => {
    expect(new MovieList().getAll()).toEqual([]);
  });

  it("agrega una película", () => {
    const movies = new MovieList();
    const movie = new Movie("Nosferatu", "1922");
    movies.add(movie);
    expect(movies.getAll()).toEqual([movie]);
  });

  it("mantiene el orden de las películas", () => {
    const movies = new MovieList();
    const first = new Movie("Primera", "2000");
    const second = new Movie("Segunda", "2001");
    movies.add(first);
    movies.add(second);
    expect(movies.getAll()).toEqual([first, second]);
  });

  it("no permite reemplazar la colección desde afuera", () => {
    const movies = new MovieList();
    movies.getAll().push(new Movie("Externa", "2000"));
    expect(movies.getAll()).toEqual([]);
  });
});
