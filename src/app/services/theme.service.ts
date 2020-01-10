import { Injectable } from '@angular/core';
import {Platform} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode = false; // Dark mode set to false aslong as the button is not toggled
  constructor(private plt: Platform) {
  // //Ref https://www.youtube.com/watch?v=UP5Q4R4sXQg Simon Grimm
    this.plt.ready().then(() =>{
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark");
      prefersDark.addListener(e =>{
        console.log("matches: ", e);
        this.setAppTheme(e.matches);
      });
    })
  }
  toggleAppTheme(){
    this.darkMode = !this.darkMode;
    this.setAppTheme(this.darkMode);
  }
  setAppTheme(dark){
      this.darkMode = dark;
      if(this.darkMode){
        document.body.classList.add("dark");
      }
      else{
        document.body.classList.remove("dark");
      }
  }
}
