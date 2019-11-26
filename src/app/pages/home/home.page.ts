import { MovieService } from "./../../services/movie.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SearchType } from "src/app/services/movie.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  results: Observable<any>; //Using when the data returns.
  searchTerm = "2019";
  type: SearchType = SearchType.all;
  constructor(private router: Router, private movieService: MovieService) {}

  go() {
    // Function to navigate to movies page
    this.router.navigate(["/movies"]);
  }

  ngOnInit() {}
  searchChanged() {
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }
}
