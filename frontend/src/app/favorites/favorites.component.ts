import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardApiService } from '../services/card-api.service';
import { Card } from '../models/Card';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
    autocompleteControl = new FormControl('');
    cards!: Card[];
    filteredCards!: Card[];
    filterProperty: string = "name";

    constructor(private cardApi: CardApiService, private snackBar: MatSnackBar) {}

    ngOnInit() {
          this.cardApi.getCards().subscribe((response) => {
            this.cards = response;
          });
    }

    cutString(value: string): string {
        if (value.length > 12) {
            return value.slice(0, 12) + '...';
        }
        return value;
    }

    getFiltered(filtered: Card[]) {
        this.filteredCards = filtered;
    }

    onDelete(card: Card){
        this.cards.splice(this.cards.indexOf(card),1)
        this.cardApi.deleteCard(card.id).subscribe((response) => {
            //TODO: Validar response
        });
        this.snackBar.open("Card deleted succesfully!", '', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
        });
    }

    drop($event: CdkDragDrop<Card[]>) {
        moveItemInArray(
          $event.container.data,
          $event.previousIndex,
          $event.currentIndex
        );
      }
}
