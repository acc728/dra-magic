import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { CardApiService } from './card-api.service';
import { RemoteApiService } from './remote-api.service';
import { Observable, map } from 'rxjs';
import { Card } from '../models/Card';


@Injectable()
export class RemoteCardApiService implements CardApiService {
  private scryfallApi = 'https://api.scryfall.com/';
  private cardsUrl = 'http://localhost:8081/api/cards';

  constructor(private remoteApi: RemoteApiService) {}

  getRandomCard(): Observable<Card> {
    return this.remoteApi.get<any>(`${this.scryfallApi}/cards/random`).pipe(
        map((response) => {
          const card: Card = {
            id: response.id,
            name: response.name,
            colors: response.colors,
            imageUrl: response.image_uris.normal != undefined ? response.image_uris.normal : "/assets/magic-card-back.jpg",
            comments: ""
          };
          return card as Card;
        })
      );
  }

  getCards(): Observable<Card[]> {
    return this.remoteApi.get<any>(`${this.cardsUrl}`).pipe(
      map((response) => {
        return response._embedded.cards;
      })
    );
  }

  getCard(id: number): Observable<Card> {
    return this.remoteApi.get<any>(`${this.cardsUrl}/${id}`);
  }

  updateCard(id: number, card: Card): Observable<any> {
    return this.remoteApi.put(this.cardsUrl + `/${id}`, card);
  }

  addCard(card: Card): Observable<Card> {
    return this.remoteApi.post<any>(this.cardsUrl, card);
  }

  deleteCard(id: number): Observable<Card> {
    return this.remoteApi.delete<any>(this.cardsUrl + `/${id}`);
  }
}
