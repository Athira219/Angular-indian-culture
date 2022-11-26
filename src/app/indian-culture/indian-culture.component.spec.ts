import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianCultureComponent } from './indian-culture.component';

describe('IndianCultureComponent', () => {
  let component: IndianCultureComponent;
  let fixture: ComponentFixture<IndianCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianCultureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
