import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Card } from 'app/models/Card';
import { CardApiService } from 'app/services/card-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-card-detail',
    templateUrl: './card-detail.component.html',
    styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent {
    cardComments: string = '';
    cardId!: number;
    card!: Card;
    unsavedChanges: boolean = true;
    error: string = "ERROR : Card comments can't be over 50 characters.";
    requestFailed: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private cardApi: CardApiService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.cardId = parseInt(
            String(this.route.snapshot.paramMap.get('cardId'))
        );

        if (this.cardId) {
            this.cardApi.getCard(this.cardId).subscribe((result) => {
                this.card = result;
                this.cardComments = result.comments;
            });
        }
    }

    onSave() {
        this.unsavedChanges = false;

        if (this.cardId) {
            this.card.comments = this.cardComments;

            this.cardApi
                .updateCard(this.cardId, this.card)
                .subscribe((response) => {
                    //TODO: Validar response
                });

            this.snackBar.open('Card edited succesfully!', '', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
            });
        }
    }

    onCancel() {
        this.unsavedChanges = false;
        if (this.card) this.router.navigate([`favorites`]);
    }
}
