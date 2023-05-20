import { Observable } from 'rxjs';

export abstract class ScrapperService {
    public abstract getHotCardsData(): Observable<String[]>;
}
