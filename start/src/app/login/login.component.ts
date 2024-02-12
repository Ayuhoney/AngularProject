import { AuthService } from './../Services/auth.service';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  @ViewChild('username')  username:ElementRef
  @ViewChild('password')  password:ElementRef

  authService:AuthService = inject(AuthService)
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){

    this.activeRoute.queryParamMap.subscribe((queries) => {
      const logout = Boolean(queries.get('logout'));
      if(logout){
        this.authService.logout();
        alert('You are logged out Successfully');
      } 
    })
  }
  
  OnLoginClicked(){
    
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(username, password);

    if(user === undefined){
      alert('The login credentials you have entered is not correct.')
    }
    else{
      alert('Welcome ' + user.name + '. You are logged in.');
      this.router.navigate(['\Courses']);
    }
  }

}
