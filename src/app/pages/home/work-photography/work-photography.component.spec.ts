import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPhotographyComponent } from './work-photography.component';

describe('WorkPhotographyComponent', () => {
  let component: WorkPhotographyComponent;
  let fixture: ComponentFixture<WorkPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkPhotographyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
