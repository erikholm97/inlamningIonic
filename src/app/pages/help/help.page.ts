import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  goToHowToSearch() {
    // Function to navigate to movies page
    this.router.navigate(["/how-to-search"]);
  }
  goToHowToGoBack() {
    // Function to navigate to movies page
    this.router.navigate(["/go-back"]);
  }
}
