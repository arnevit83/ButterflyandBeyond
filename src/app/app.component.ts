import { Component } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
//import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'BaBApp';
  bgClass = 'Home';
  faChevronDown = faChevronUp;

  constructor(
  ) {
  }
}
