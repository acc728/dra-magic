import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardApiService } from '../services/card-api.service';
import { Card } from '../models/Card';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-generator',
  templateUrl: './card-generator.component.html',
  styleUrls: ['./card-generator.component.scss'],
})
export class CardGeneratorComponent {
  autocompleteControl = new FormControl('');
  randomCard!: Card;

  constructor(private cardApi: CardApiService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.generateRandomCard();
  }

  generateRandomCard(): void{
    this.cardApi.getRandomCard().subscribe((response) => {
          this.randomCard = {
            id: -1,
            name: response.name,
            colors: response.colors,
            imageUrl: response.imageUrl,
            comments: response.comments
          }
          console.log(response);
        });
  }

  addFavorites() : void {
    console.log("Carta a aniadir: " + this.randomCard.name + ", " + this.randomCard.imageUrl + ", " + this.randomCard)
    this.cardApi.addCard(this.randomCard).subscribe((response) => {
        //TODO: Validar response
        const addedDeck = response;
        console.log("The added card is:" + addedDeck);
        this.snackBar.open("Card added succesfully to favorites!", '', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
        });
      });
  }
}
