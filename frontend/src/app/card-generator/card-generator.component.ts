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
        });
  }

  addFavorites() : void {
    this.cardApi.getCards().subscribe((response) => {
        const found = response.find((card) => {
            return card.name == this.randomCard.name;
        });

        if(found){
            console.log(response.indexOf(this.randomCard))
            this.snackBar.open("Card is already added to favorites!", '', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
            });
        }else{
            console.log(response.indexOf(this.randomCard))
            this.cardApi.addCard(this.randomCard).subscribe((response2) => {
                const addedCard = response2;
                this.snackBar.open("Card succesfully added to favorites!", '', {
                    duration: 3000,
                    verticalPosition: 'top',
                    horizontalPosition: 'center'
                });
              });
        }
    });
  }
}
