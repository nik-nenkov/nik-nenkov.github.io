import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronosComponent } from './chronos.component';

describe('ChronosComponent', () => {
  let component: ChronosComponent;
  let fixture: ComponentFixture<ChronosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChronosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
