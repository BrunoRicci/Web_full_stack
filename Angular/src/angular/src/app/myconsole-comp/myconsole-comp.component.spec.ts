import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyconsoleCompComponent } from './myconsole-comp.component';

describe('MyconsoleCompComponent', () => {
  let component: MyconsoleCompComponent;
  let fixture: ComponentFixture<MyconsoleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyconsoleCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyconsoleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
