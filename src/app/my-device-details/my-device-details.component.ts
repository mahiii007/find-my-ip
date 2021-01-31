import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector'

@Component({
  selector: 'app-my-device-details',
  templateUrl: './my-device-details.component.html',
  styleUrls: ['./my-device-details.component.scss']
})
export class MyDeviceDetailsComponent implements OnInit {
  deviceInfo;
  constructor(private deviceDetails: DeviceDetectorService) { }

  ngOnInit() {
    const device = this.deviceDetails.getDeviceInfo();
    this.deviceInfo = Array.of(device);
  }

}
