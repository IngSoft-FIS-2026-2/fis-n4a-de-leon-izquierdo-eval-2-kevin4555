import { describe, expect, it } from "vitest";
import { Movie } from "../domain/Movie";

describe("Movie", () => {
  it("conserva el título recibido", () => {
    expect(new Movie("Nosferatu", "1922").title).toBe("Nosferatu");
  });

  it("conserva el año recibido", () => {
    expect(new Movie("Nosferatu", "1922").year).toBe("1922");
  });

  it("permite cambiar el título", () => {
    const movie = new Movie("Original", "2020");
    movie.title = "Nuevo";
    expect(movie.title).toBe("Nuevo");
  });

  it("permite cambiar el año", () => {
    const movie = new Movie("Original", "2020");
    movie.year = "2021";
    expect(movie.year).toBe("2021");
  });
});
