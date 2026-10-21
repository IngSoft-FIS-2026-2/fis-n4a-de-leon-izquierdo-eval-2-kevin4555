import "./style.css";
import { Movie } from "../domain/Movie";
import { MovieList } from "../domain/MovieList";

const form = document.querySelector<HTMLFormElement>("form");
const list = document.querySelector<HTMLUListElement>("#movie-list");
const movies = new MovieList();

if (form && list) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const title = String(data.get("title") ?? "");
    const year = String(data.get("year") ?? "");
    const director = String(data.get("director") ?? "");
    const vista = Boolean(data.get("vista") ?? false);

    const movie = new Movie(title, year, director, vista);
    movies.add(movie);

    list.replaceChildren(
      ...movies.getAll().map((movie) => {
        const item = document.createElement("li");
        item.textContent = `${movie.title} (${movie.year}), director: ${movie.director}, vista: ${movie.vista}`;
        return item;
      }),
    );

    form.reset();
  });
}
