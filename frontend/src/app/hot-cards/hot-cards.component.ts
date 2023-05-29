import { Component } from '@angular/core';
import { CardApiService } from '../services/card-api.service';
import { Card } from '../models/Card';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ScrapperService } from 'app/services/scrapper.service';

@Component({
    selector: 'app-hot-cards',
    templateUrl: './hot-cards.component.html',
    styleUrls: ['./hot-cards.component.scss'],
})
export class HotCardsComponent {
    numCards: number = 5;
    hotCards: String[] = ['', '', '', '', ''];
    scrapperArray!: String[];

    constructor(
        private cardApiService: CardApiService,
        private scrapperService: ScrapperService
    ) {}

    ngOnInit() {
        this.getHotCardsData();
    }

    ngOnChange() {
        this.getHotCardsData();
    }

    getHotCardsData() {
        this.scrapperService.getHotCardsData().subscribe((result: any) => {
            this.scrapperArray = result.topCards;
            for (let i = 0; i < this.numCards; i++) {
                this.cardApiService
                    .getCardImageByName(
                        this.scrapperArray[i].replace(/\([^()]*\)/g, '').substring(0,15)
                    )
                    .subscribe((response) => {
                        this.hotCards[i] = response;
                        if (this.hotCards[i].length == 0) {
                            this.cardApiService
                                .getCardImageByName(
                                    this.scrapperArray[
                                        this.scrapperArray.length - i
                                    ]
                                )
                                .subscribe((response) => {
                                    this.hotCards[i] = response;
                                });
                        }
                    });
            }
        });
    }
}
