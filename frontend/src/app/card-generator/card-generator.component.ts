import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardApiService } from '../services/card-api.service';
import { Card } from '../models/Card';

@Component({
  selector: 'app-card-generator',
  templateUrl: './card-generator.component.html',
  styleUrls: ['./card-generator.component.scss'],
})
export class CardGeneratorComponent {
  autocompleteControl = new FormControl('');
//   cards!: Card[];
  randomCard!: Card;
//   filteredCards!: Card[];

  constructor(private cardApi: CardApiService) {}

  ngOnInit() {
    this.generateRandomCard();
  }

  generateRandomCard(): void{
    this.cardApi.getRandomCard().subscribe((response) => {
        //   this.cards = response;
          this.randomCard = {
            name: response.name,
            colors: response.colors,
            imageUrl: response.imageUrl
          }
          console.log(response);
        });
  }

  addFavorites() : void {

  }
}
