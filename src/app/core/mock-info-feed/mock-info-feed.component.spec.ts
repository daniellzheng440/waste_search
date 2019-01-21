import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockInfoFeedComponent } from './mock-info-feed.component';

describe('MockInfoFeedComponent', () => {
  let component: MockInfoFeedComponent;
  let fixture: ComponentFixture<MockInfoFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockInfoFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockInfoFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
