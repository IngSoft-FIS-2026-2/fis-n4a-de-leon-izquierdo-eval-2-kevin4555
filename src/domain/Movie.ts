export class Movie {
  private _title: string;
  private _year: string;
  private _director: string;
  private _vista: boolean;

  constructor(title: string, year: string, director: string, vista: boolean) {
    this._title = title;
    this._year = year;
    this._director = director;
    this._vista = vista;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get year(): string {
    return this._year;
  }

  set year(year: string) {
    this._year = year;
  }

  get director(): string {
    return this._director;
  }

  set director(director: string) {
    this._director = director;
  }

  get vista(): boolean {
    return this._vista;
  }

  set vista(vista: boolean) {
    this._vista = vista;
  }
}
