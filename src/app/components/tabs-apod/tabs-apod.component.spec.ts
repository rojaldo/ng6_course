import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsApodComponent } from './tabs-apod.component';

describe('TabsApodComponent', () => {
  let component: TabsApodComponent;
  let fixture: ComponentFixture<TabsApodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsApodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
