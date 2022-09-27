import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model: any = {};
  ready = false;

  constructor() {
    setTimeout(() => (this.ready = true), 100);
  }
}
