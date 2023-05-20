import { Injectable } from '@angular/core';
import { ScrapperService } from './scrapper.service';
import { Observable } from 'rxjs';
import { RemoteApiService } from './remote-api.service';

@Injectable()
export class RemoteScrapperService implements ScrapperService {
    private scrapperUrl = `http://localhost:8081/api/trends`;

    constructor(private remoteApi: RemoteApiService) {}

    public getHotCardsData(): Observable<String[]> {
        return this.remoteApi.get<String[]>(`${this.scrapperUrl}/data`);
    }
}
