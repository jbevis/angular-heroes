import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1><h2>{{hero}} details!`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'X-Menipedia';
  hero = 'Wolverine';
}
