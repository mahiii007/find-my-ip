import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyIpDetailsComponent } from './my-ip-details/my-ip-details.component';
import { IpService } from './ip-service.service';
import { MyDeviceDetailsComponent } from './my-device-details/my-device-details.component';
import { DeviceDetectorService } from 'ngx-device-detector';


@NgModule({
  declarations: [
    AppComponent,
    MyIpDetailsComponent,
    MyDeviceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [IpService,DeviceDetectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
