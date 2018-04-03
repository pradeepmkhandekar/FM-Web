import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatecarComponent } from './privatecar.component';

describe('PrivatecarComponent', () => {
  let component: PrivatecarComponent;
  let fixture: ComponentFixture<PrivatecarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatecarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
