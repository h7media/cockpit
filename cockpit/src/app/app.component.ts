import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cockpit';

  constructor(
    private location: Router,
  ) { }

  public verificaLogin(): boolean {
    return this.location.url === '/login' || this.location.url === '/'
  }
}
