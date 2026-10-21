export class Movie {
  private _title: string;
  private _year: string;

  constructor(title: string, year: string) {
    this._title = title;
    this._year = year;
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
}
