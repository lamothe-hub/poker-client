import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnnysTableComponent } from './johnnys-table.component';

describe('JohnnysTableComponent', () => {
  let component: JohnnysTableComponent;
  let fixture: ComponentFixture<JohnnysTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JohnnysTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JohnnysTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
