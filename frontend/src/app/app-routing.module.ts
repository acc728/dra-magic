import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/cards', pathMatch: 'full' },
    { path: 'cards', component: CardListComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
