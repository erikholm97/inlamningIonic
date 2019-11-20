import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "movies",
    loadChildren: "./pages/movies/movies.module#MoviesPageModule"
  },
  {
    path: "movies/:id",
    loadChildren:
      "./pages/movie-details/movie-details.module#MovieDetailsPageModule"
  },
  {
    path: 'home',
    loadChildren: "./pages/home/home.module#HomePageModule"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
