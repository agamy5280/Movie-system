import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveisTimesComponent } from './moveis-times.component';

describe('MoveisTimesComponent', () => {
  let component: MoveisTimesComponent;
  let fixture: ComponentFixture<MoveisTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoveisTimesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoveisTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
