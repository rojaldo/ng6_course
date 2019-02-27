import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestsampleComponent } from './restsample.component';

describe('RestsampleComponent', () => {
  let component: RestsampleComponent;
  let fixture: ComponentFixture<RestsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
