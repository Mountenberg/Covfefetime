import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FefeComponent } from './fefe.component';

describe('FefeComponent', () => {
  let component: FefeComponent;
  let fixture: ComponentFixture<FefeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FefeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
