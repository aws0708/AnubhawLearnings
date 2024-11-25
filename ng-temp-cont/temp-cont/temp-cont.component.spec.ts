import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempContComponent } from './temp-cont.component';

describe('TempContComponent', () => {
  let component: TempContComponent;
  let fixture: ComponentFixture<TempContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempContComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
