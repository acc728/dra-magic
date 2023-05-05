import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardApiService } from '../services/card-api.service';
import { Card } from '../models/Card';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

    constructor(private cardApi: CardApiService) {}

    ngOnInit() {
        //   this.cardApi.getCards().subscribe((response) => {
        //     this.cards = response;
        //   });
        this.cards = [
            {
                id: 1,
                name: 'Faerie Artisans',
                colors: Array(1),
                imageUrl:
                    'https://cards.scryfall.io/normal/front/f/f/ff05c503-2536-48f5-a639-480614a2e5f8.jpg?1562427705',
                comments: ""
            },

            {
                id:2,
                name: 'Aim for the Head',
                colors: Array(1),
                imageUrl:
                    'https://cards.scryfall.io/normal/front/0/9/0942e5f1-795b-47bc-ae41-36f7091c4c42.jpg?1673162210',
                comments: ""
            },

            {
                id:3,
                name: 'Phyrexian Tower',
                colors: Array(0),
                imageUrl:
                    'https://cards.scryfall.io/normal/front/d/e/deb95b6f-db1d-40bd-8eff-62b6362ab744.jpg?1599768153',
                comments: ""
            }, {
                id: 4,
                name: 'Faerie Artisans',
                colors: Array(1),
                imageUrl:
                    'https://cards.scryfall.io/normal/front/f/f/ff05c503-2536-48f5-a639-480614a2e5f8.jpg?1562427705',
                comments: ""
            },

            {
                id:5,
                name: 'Aim for the Head',
                colors: Array(1),
                imageUrl:
                    'https://cards.scryfall.io/normal/front/0/9/0942e5f1-795b-47bc-ae41-36f7091c4c42.jpg?1673162210',
                comments: ""
            },

            {
                id:6,
                name: 'Phyrexian Tower',
                colors: Array(0),
                imageUrl:
                    'https://cards.scryfall.io/normal/front/d/e/deb95b6f-db1d-40bd-8eff-62b6362ab744.jpg?1599768153',
                comments:""
            }, {
                id: 7,
                name: 'Faerie Artisans',
                colors: Array(1),
                imageUrl:
                    'https://cards.scryfall.io/normal/front/f/f/ff05c503-2536-48f5-a639-480614a2e5f8.jpg?1562427705',
                comments: ""
            },
        ];
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
        console.log(card.name)
    }

    drop($event: CdkDragDrop<Card[]>) {
        moveItemInArray(
          $event.container.data,
          $event.previousIndex,
          $event.currentIndex
        );
      }
}
