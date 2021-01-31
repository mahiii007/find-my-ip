import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDeviceDetailsComponent } from './my-device-details/my-device-details.component';
import { MyIpDetailsComponent } from './my-ip-details/my-ip-details.component';


const routes: Routes = [
  {path:'', component: MyIpDetailsComponent},
  {path:'myDevice', component: MyDeviceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
