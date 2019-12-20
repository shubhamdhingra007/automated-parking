import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingListingComponent } from './parking-listing.component';

describe('ParkingListingComponent', () => {
  let component: ParkingListingComponent;
  let fixture: ComponentFixture<ParkingListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
