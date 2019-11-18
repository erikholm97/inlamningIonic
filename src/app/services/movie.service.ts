import { Injectable } from "@angular/core";
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export enum SearchType {
  all = "",
  movie = "movie",
  series = "series",
  episode = "episode"
}
@Injectable({
  providedIn: "root"
})
export class MovieService {
  url = "http://www.omdbapi.com/";
  apiKey = "e3afe514";

  constructor(private http: HttpClient) {}
  // tslint:disable-next-line: no-unused-expression
  searchData(title: string, type: SearchType): Observable<any> {
    return this.http
      .get(
        `${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`
      )
      .pipe(
        map(results => {
          console.log("RAW: ", results);
          return results["Search"];
        })
      );
  }
  getDetails(id) {
    console.log(id);
    return this.http.get(`${this.url}?=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
