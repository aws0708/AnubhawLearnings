import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcontrolComponent } from './forcontrol.component';

describe('ForcontrolComponent', () => {
  let component: ForcontrolComponent;
  let fixture: ComponentFixture<ForcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForcontrolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
