import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserFormService } from '../user-form.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [UserFormService]
})

export class UserFormComponent implements OnInit {
  locations: any[]=null;
  constructor(private userFormService: UserFormService) { }
  getPhysicalAddress(lat: string, lng: string) {
    this.userFormService.getByLatAndLng(lat,lng).subscribe(response =>{
      this.locations = response.json();
      console.log(this.locations);
    });
  }
  getLatAndLng(house: string, street: string, streetType: string, city: string, state: string) {
    this.userFormService.getByPhysicalAddress(house,street,streetType,city,state).subscribe(response =>{
      this.locations = response.json();
      console.log(this.locations);
    })
  }
  ngOnInit() {
  }

}
