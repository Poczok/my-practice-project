import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormTwoComponent } from './nested-form-two.component';

describe('NestedFormTwoComponent', () => {
  let component: NestedFormTwoComponent;
  let fixture: ComponentFixture<NestedFormTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFormTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
