import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = [];
  constructor() {
    this.names = this.getNames();
}
getNames() {
    return [
        { 'name': 'dhananjay Kumar', },
        { 'name': 'jason beres' },
        { 'name': 'adam jafe' }
    ];
}
}
