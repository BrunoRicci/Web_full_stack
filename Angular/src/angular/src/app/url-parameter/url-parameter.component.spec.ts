import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlParameterComponent } from './url-parameter.component';

describe('UrlParameterComponent', () => {
  let component: UrlParameterComponent;
  let fixture: ComponentFixture<UrlParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
