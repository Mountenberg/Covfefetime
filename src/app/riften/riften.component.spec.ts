import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiftenComponent } from './riften.component';

describe('RiftenComponent', () => {
  let component: RiftenComponent;
  let fixture: ComponentFixture<RiftenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiftenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiftenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
