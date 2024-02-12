import { NgModule } from "@angular/core";
import { Routes,RouterModule} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { CoursesComponent } from "./courses/courses.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CanActivate, CanActivateChild,resolve } from "./auth.guard"
import { PopularComponent } from "./home/popular/popular.component";


const routes: Routes = [

    { path: "Home", component: HomeComponent },
    { path: "", component: HomeComponent },
    // { path:'',redirectTo:"home",pathMatch:"full"}, //set default route when user in root page
    
    { path:"About", component: AboutComponent },
    { path:"Contact", component: ContactComponent,canDeactivate:[(comp:ContactComponent)=>{return comp.canExit()}]},

    { path:"Courses", component: CoursesComponent ,resolve:{resolve}},

   //{path: "Courses",canActivateChild:[CanActivateChild],children:[ //this are protected all child routes
    {path: "Courses",children:[ //this is all child routes 

      {path:"Courses/:id",component:CourseDetailComponent},
      {path:"Popular" ,component:PopularComponent,canActivate:[CanActivate],}, //for single use
      { path:"Checkout", component:CheckoutComponent,canActivate:[CanActivate],},
     ]},

    { path: "Login", component: LoginComponent },
    { path: "**", component: NotFoundComponent },
  ];

@NgModule({

    imports: [
        RouterModule.forRoot(routes,{enableTracing:true})
      ],exports:[RouterModule]
})
export class RoutingModule{

}