import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Card } from '../models/Card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    //   @Input() name: string = '';
    @Input() card!: Card;


    ngOnChanges() {
        this.loadUrl();
    }

    loadUrl(): void {
        //this.name = this.name.toLowerCase();
        this.card = this.card;
    }
}
