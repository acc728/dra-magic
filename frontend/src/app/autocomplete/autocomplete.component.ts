import { Component, ElementRef, Input, ViewChild, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent<Card> {
  @ViewChild('autocomplete', { static: false })
  automcompleteElement: ElementRef = new ElementRef(null);

  @Input() placeholder: string = 'Search...';
  @Input() array!: Card[];
  @Input() control = new FormControl('');
  @Input() filterProperty: string = '';

  @Output() filteredOutput = new EventEmitter<Card[]>();

  filteredArray!: Observable<Card[]>;
  filterPropertyKey!: keyof Card;
  type!: string;

  ngOnChanges(): void {
    this.filterPropertyKey = this.filterProperty as keyof Card;
    this.filteredArray = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    this.filteredOutput.emit(this.array);
  }

  private _filter(value: string): Card[] {
    const filterValue = value.toLowerCase();
    let filtered: Card[] = [];

    if (!value) {
      filtered = this.array;
    } else if (this.filterPropertyKey) {
      filtered = this.array.filter((option) =>
        String(option[this.filterPropertyKey])
          .toLowerCase()
          .includes(filterValue)
      );
    } else {
      filtered = this.array.filter((option) =>
        String(option).toLowerCase().includes(filterValue)
      );
    }

    this.filteredOutput.emit(filtered);

    return filtered;
  }
}
