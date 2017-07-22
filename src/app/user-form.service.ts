import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from  'rxjs/Observable';
import { geoKey } from './api-keys';
@Injectable()
export class UserFormService {

  constructor(private http: Http) { }
  getPhysicalAddress(lat: string, lng: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + lng + "&key=" + geoKey)
  }
  getGpsCoords(street: string, city: string, state: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + street + ","+ city + state + "&key=" + geoKey)
  }
}