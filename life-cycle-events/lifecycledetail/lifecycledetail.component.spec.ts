import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycledetailComponent } from './lifecycledetail.component';

describe('LifecycledetailComponent', () => {
  let component: LifecycledetailComponent;
  let fixture: ComponentFixture<LifecycledetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycledetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
