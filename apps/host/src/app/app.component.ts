import { Component } from '@angular/core';
import { UserService } from '@dmf/shared/auth';

@Component({
  selector: 'dmf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'host';

  constructor(userService: UserService) {
    userService.doStuff();
  }
}
