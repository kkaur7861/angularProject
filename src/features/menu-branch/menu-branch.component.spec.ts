import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBranchComponent } from './menu-branch.component';

describe('MenuBranchComponent', () => {
  let component: MenuBranchComponent;
  let fixture: ComponentFixture<MenuBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
