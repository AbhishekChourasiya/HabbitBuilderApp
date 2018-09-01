import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComitmentComponent } from './comitment.component';

describe('ComitmentComponent', () => {
  let component: ComitmentComponent;
  let fixture: ComponentFixture<ComitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
