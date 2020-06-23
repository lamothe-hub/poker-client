import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeffreysTableComponent } from './jeffreys-table.component';

describe('JeffreysTableComponent', () => {
  let component: JeffreysTableComponent;
  let fixture: ComponentFixture<JeffreysTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeffreysTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeffreysTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
