import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatecarquotesComponent } from './privatecarquotes.component';

describe('PrivatecarquotesComponent', () => {
  let component: PrivatecarquotesComponent;
  let fixture: ComponentFixture<PrivatecarquotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatecarquotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatecarquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
