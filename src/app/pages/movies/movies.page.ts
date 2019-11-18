import { MovieService} from "./../../services/movie.service";
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>; //Using when the data returns. 
  searchTerm = '';
  type: SearchType = SearchType.all;


  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  searchChanged(){
    this.results = this.movieService.searchData(this.searchTerm, this.type);

    /*this.results.subscribe(res => ){
      
    }
    */
  }

}
