import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-how-to-search',
  templateUrl: './how-to-search.page.html',
  styleUrls: ['./how-to-search.page.scss'],
})
export class HowToSearchPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  goToSearch(){
    this.router.navigate(["/movies"]);
  }

}
