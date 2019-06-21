import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildappComponent } from './childapp.component';

describe('ChildappComponent', () => {
  let component: ChildappComponent;
  let fixture: ComponentFixture<ChildappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
