import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatctmeComponent } from './conatctme.component';

describe('ConatctmeComponent', () => {
  let component: ConatctmeComponent;
  let fixture: ComponentFixture<ConatctmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConatctmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConatctmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
