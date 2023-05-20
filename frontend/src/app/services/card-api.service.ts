import { Observable } from 'rxjs';
import { Card } from '../models/Card';

export abstract class CardApiService {
  public abstract getRandomCard(): Observable<Card>;

  public abstract getCards(): Observable<Card[]>;

  public abstract getCard(id: number): Observable<Card>;

  public abstract updateCard(id: number, card: Card): Observable<any>;

  public abstract addCard(card: Card): Observable<Card>;

  public abstract deleteCard(id: number): Observable<Card>;

  public abstract getCardImageByName(cardName : String) : Observable<String>;
}
