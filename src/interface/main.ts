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

    const movie = new Movie(title, year);
    movies.add(movie);

    list.replaceChildren(
      ...movies.getAll().map((movie) => {
        const item = document.createElement("li");
        item.textContent = `${movie.title} (${movie.year})`;
        return item;
      }),
    );

    form.reset();
  });
}
