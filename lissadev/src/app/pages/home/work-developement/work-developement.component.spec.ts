import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDevelopementComponent } from './work-developement.component';

describe('WorkDevelopementComponent', () => {
  let component: WorkDevelopementComponent;
  let fixture: ComponentFixture<WorkDevelopementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkDevelopementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkDevelopementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
