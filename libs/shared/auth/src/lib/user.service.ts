import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  count = 1;
  constructor() {
    console.log('ctr UserService')
  }

  doStuff(): void {
    console.log('count ', this.count++)
  }


}
