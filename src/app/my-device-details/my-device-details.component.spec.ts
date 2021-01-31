import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDeviceDetailsComponent } from './my-device-details.component';

describe('MyDeviceDetailsComponent', () => {
  let component: MyDeviceDetailsComponent;
  let fixture: ComponentFixture<MyDeviceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDeviceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
