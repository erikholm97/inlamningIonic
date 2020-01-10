import { MovieService } from "./../../services/movie.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SearchType } from "src/app/services/movie.service";
import { Observable } from "rxjs";
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(private router: Router, private themeService: ThemeService) {}

  goToMovies() {
    // Function to navigate to movies page
    this.router.navigate(["/movies"]);
  }
  goToHelp() {
    // Function to navigate to movies page
    this.router.navigate(["/help"]);
  }
  toggleDarkMode(){
    
    this.themeService.toggleAppTheme();
  }

  ngOnInit() {}
}
