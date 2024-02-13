import { Injectable, inject } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    isLogged: boolean = false;
    userService: UserService = inject(UserService);

    constructor() {

        const storedUser = localStorage.getItem('currentUser');
        this.isLogged = !!storedUser; // If a user is stored, consider the user logged in  
    }

    login(username: string, password: string) {
        let user = this.userService.users.find((u) => 
        u.username === username && u.password === password);

        if (user === undefined)
            this.isLogged = false;
        else {
            this.isLogged = true;
            localStorage.setItem('currentUser', JSON.stringify({ username, password }));
        }
        return user;
    }

    logout() {

        this.isLogged = false;
      //  localStorage.removeItem('currentUser');
        localStorage.clear();
    }

    isAuthenticated() {
        return this.isLogged;
    }
}
