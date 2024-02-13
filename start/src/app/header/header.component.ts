import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

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
