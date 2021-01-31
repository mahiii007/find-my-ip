import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIpDetailsComponent } from './my-ip-details.component';

describe('MyIpDetailsComponent', () => {
  let component: MyIpDetailsComponent;
  let fixture: ComponentFixture<MyIpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
