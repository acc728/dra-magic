import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './menu/menu.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CardComponent } from './card/card.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CardGeneratorComponent } from './card-generator/card-generator.component';
import { LoaderComponent } from './loader/loader.component';
import { RemoteCardApiService } from './services/remote-card-api.service';
import { CardApiService } from './services/card-api.service';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HotCardsComponent } from './hot-cards/hot-cards.component';
import { RemoteScrapperService } from './services/remote-scrapper.service';
import { ScrapperService } from './services/scrapper.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CardComponent,
    AutocompleteComponent,
    CardGeneratorComponent,
    LoaderComponent,
    HomeComponent,
    FavoritesComponent,
    CardDetailComponent,
    HotCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSidenavModule,
    HttpClientModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    DragDropModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: CardApiService, useClass: RemoteCardApiService },
    { provide: ScrapperService, useClass: RemoteScrapperService },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
