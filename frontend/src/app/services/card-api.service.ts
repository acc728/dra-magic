import { Observable } from 'rxjs';
import { Card } from '../models/Card';

export abstract class CardApiService {
  public abstract getCards(): Observable<Card[]>;
  public abstract getCard(): Observable<Card>;
  public abstract getRandomCard(): Observable<Card>;
}
