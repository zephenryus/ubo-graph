import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UboGraphComponent } from './ubo-graph.component';

describe('UboGraphComponent', () => {
  let component: UboGraphComponent;
  let fixture: ComponentFixture<UboGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UboGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UboGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
