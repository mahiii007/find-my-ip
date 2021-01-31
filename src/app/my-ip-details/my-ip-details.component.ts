import { Component, OnInit } from "@angular/core";
import { IpService } from "../ip-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-my-ip-details",
  templateUrl: "./my-ip-details.component.html",
  styleUrls: ["./my-ip-details.component.scss"],
})
export class MyIpDetailsComponent implements OnInit {
  myIp: string;
  myIpDetails;
  deviceInfo;

  constructor(
    public ipService: IpService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.viewMyIp();
    const ipDetails = await this.viewMyIpDetails(this.myIp);
    this.myIpDetails = Array.of(ipDetails);
    
  }

  async viewMyIp() {
    try {
      const ip = await this.ipService.loadMyIdAddress();
      this.myIp = ip;
    } catch (err) {
      console.error(err.error);
    }
  }

  async viewMyIpDetails(ipAddress) {
    try {
      const ipDetails = await this.ipService.loadIpDetails(ipAddress);
      return ipDetails;
    } catch (error) {
      console.log(error);
    }
  }
  
  navigateToDeviceInfo(){
    this.router.navigate(['myDevice']);
  }
}
