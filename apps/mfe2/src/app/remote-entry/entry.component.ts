import { Component } from '@angular/core';
import { UserService } from '@dmf/shared/auth';

@Component({
  selector: 'dmf-mfe2-entry',
  template: `<dmf-nx-welcome></dmf-nx-welcome>`,
})
export class RemoteEntryComponent {
  constructor(userService: UserService) {
    console.log('RemoteEntryComponent mfe2', userService)
    userService.doStuff();
  }
}
