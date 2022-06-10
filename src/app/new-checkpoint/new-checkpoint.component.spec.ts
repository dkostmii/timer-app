import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCheckpointComponent } from './new-checkpoint.component';

describe('NewCheckpointComponent', () => {
  let component: NewCheckpointComponent;
  let fixture: ComponentFixture<NewCheckpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCheckpointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCheckpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
