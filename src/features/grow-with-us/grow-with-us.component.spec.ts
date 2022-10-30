import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowWithUsComponent } from './grow-with-us.component';

describe('GrowWithUsComponent', () => {
  let component: GrowWithUsComponent;
  let fixture: ComponentFixture<GrowWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowWithUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
