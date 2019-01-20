import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteFeedComponent } from './favourite-feed.component';

describe('FavouriteFeedComponent', () => {
  let component: FavouriteFeedComponent;
  let fixture: ComponentFixture<FavouriteFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
