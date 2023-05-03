import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardGeneratorComponent } from './card-generator/card-generator.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/cards', pathMatch: 'full' },
    { path: 'cards', component: CardGeneratorComponent },
    { path: 'home', component: HomeComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
