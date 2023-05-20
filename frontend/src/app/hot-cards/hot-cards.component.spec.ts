import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotCardsComponent } from './hot-cards.component';

describe('HotCardsComponent', () => {
  let component: HotCardsComponent;
  let fixture: ComponentFixture<HotCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
