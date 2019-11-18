import { MovieService } from "./../../services/movie.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.page.html",
  styleUrls: ["./movie-details.page.scss"]
})
export class MovieDetailsPage implements OnInit {
  information = null;
<<<<<<< HEAD
   
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService ) { }
=======
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}
>>>>>>> cdd6c06b2e7b7aa97d00b7bbc5096f5c37fe4c9a

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id);

    this.movieService.getDetails(id).subscribe(result => {
      console.log("details: ", result);
      this.information = result;
    });
  }
<<<<<<< HEAD
  openWebsite(){
    window.open(this.information.Website, '_blank');
=======
  openWebsite() {
    window.open(this.information.Website, "_blank");
>>>>>>> cdd6c06b2e7b7aa97d00b7bbc5096f5c37fe4c9a
  }
}
