import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingMapComponent } from './housing-map.component';

describe('HousingMapComponent', () => {
  let component: HousingMapComponent;
  let fixture: ComponentFixture<HousingMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
