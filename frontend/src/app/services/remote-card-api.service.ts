import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { CardApiService } from './card-api.service';
import { RemoteApiService } from './remote-api.service';
import { Observable, map } from 'rxjs';
import { Card } from '../models/Card';


@Injectable()
export class RemoteCardApiService implements CardApiService {
  private magicApiUrl = 'https://api.magicthegathering.io/v1/';
  private scryfallApi = 'https://api.scryfall.com/';

  constructor(private remoteApi: RemoteApiService) {}

  getCards(): Observable<Card[]> {
    return this.remoteApi.get<any>(`${this.magicApiUrl}/cards`).pipe(
        map((response) => {
          response.cards.map((dataCard: Card)=> ({
            name: dataCard.name,
            imageUrl: dataCard.imageUrl,
            colors: dataCard.colors
          }))
          return response as Card[];
        }
    ));
  }

  getCard(): Observable<Card> {
    const cardNumber = Math.floor(Math.random()*99);
    return this.remoteApi.get<any>(`${this.magicApiUrl}/cards`).pipe(
        map((response) => {
          const card: Card = {
            name: response.cards[cardNumber].name,
            colors: response.cards[cardNumber].colors,
            imageUrl: response.cards[cardNumber].imageUrl != undefined ? response.cards[cardNumber].imageUrl : "/assets/magic-card-back.jpg"
          };
          return card as Card;
        })
      );
  }

  getRandomCard(): Observable<Card> {
    const cardNumber = Math.floor(Math.random()*99);
    return this.remoteApi.get<any>(`${this.scryfallApi}/cards/random`).pipe(
        map((response) => {
          const card: Card = {
            name: response.name,
            colors: response.colors,
            imageUrl: response.image_uris.normal != undefined ? response.image_uris.normal : "/assets/magic-card-back.jpg"
          };
          return card as Card;
        })
      );
  }
}
