import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My Google Map';
  lat: number = 52.258107; // center of Holland
  lng: number = 5.600592;  // center of Holland
}
