import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" }, //Redirecting to home if path is empty.
  { //Ref https://www.youtube.com/watch?v=3QPbBJgNF94&t=355s Simon Grimm
    path: "movies",
    loadChildren: "./pages/movies/movies.module#MoviesPageModule"
  },
  {
    path: "movies/:id",
    loadChildren:
      "./pages/movie-details/movie-details.module#MovieDetailsPageModule"
  },
  {
    path: "home",
    loadChildren: "./pages/home/home.module#HomePageModule"
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'how-to-search',
    loadChildren: () => import('./pages/how-to-search/how-to-search.module').then( m => m.HowToSearchPageModule)
  },
  {
    path: 'go-back',
    loadChildren: () => import('./pages/go-back/go-back.module').then( m => m.GoBackPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./page/favourites/favourites.module').then( m => m.FavouritesPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
