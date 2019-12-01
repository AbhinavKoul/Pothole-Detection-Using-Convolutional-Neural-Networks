import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeReportsComponent } from './see-reports.component';

describe('SeeReportsComponent', () => {
  let component: SeeReportsComponent;
  let fixture: ComponentFixture<SeeReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
