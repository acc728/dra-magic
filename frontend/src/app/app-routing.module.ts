import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardGeneratorComponent } from './card-generator/card-generator.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'cards', component: CardGeneratorComponent },
    { path: 'home', component: HomeComponent },
    { path: 'favorites', component: FavoritesComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
