import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-geocache',
  templateUrl: './new-geocache.component.html',
  styleUrls: ['./new-geocache.component.scss'],
  providers: []
})

export class NewGeocacheComponent implements OnInit {
  @Input() childLocation
  constructor() { }

  ngOnInit() {
  }

}
