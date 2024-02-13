import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

/*
  The double negation !! is a common JavaScript pattern used to coerce a value into a boolean. 
  It essentially converts any truthy value to true and any falsy value to false. 
  So !!localStorage.getItem('currentUser') will evaluate to true if there's a truthy value stored under 
  the 'currentUser' key,and false if the value is falsy, null, or undefined.
*/

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  getUsername(): string {

    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      const currentUserObj = JSON.parse(currentUser);
      return currentUserObj.username || '';
    }
    return '';
  }

}
