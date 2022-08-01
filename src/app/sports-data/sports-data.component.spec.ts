import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsDataComponent } from './sports-data.component';

describe('SportsDataComponent', () => {
  let component: SportsDataComponent;
  let fixture: ComponentFixture<SportsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
