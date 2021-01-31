import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Constants} from './constants';
import { DeviceDetectorService } from 'ngx-device-detector'


@Injectable({
  providedIn: "root",
})
export class IpService {
  constructor(private http: HttpClient) {}

  async loadMyIdAddress() {
    const url = "https://api.ipify.org/";
    return this.http.get(url, { ...Option, responseType: "text" }).toPromise();
  }
  async loadIpDetails(ipAddress){
    const url = `http://api.ipstack.com/${ipAddress}?access_key=${Constants.API_KEYS.GEO_LOCATION}`;
    return this.http.get(url, { ...Option, responseType: "json" }).toPromise();
  }
}
