import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  firstName: string = '';
  lastName: string = '';
  country: string = 'usa';
  message: string = '';

  isSubmitted: boolean = false;

  OnSubmit(){
    this.isSubmitted = true;

    if(this.isSubmitted == true){
      return alert("Thank for Share you information")
    }
  }

  canExit(){
    console.log('canExit called!')
    if((this.firstName || this.lastName || this.message) && !this.isSubmitted){
      return confirm('You have unsaved changes. Do you want to navigate away?')
    }
    else{
      return true;
    }
  }

}
