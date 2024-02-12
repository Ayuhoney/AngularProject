import { Component ,inject,OnInit,OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit,OnDestroy{


  selectedCourse:Course;
  courseId:number;

  courseService:CourseService = inject(CourseService);
  activeRoute:ActivatedRoute = inject(ActivatedRoute);

  paramsMapobs;

  ngOnInit(){
    
   //take id from params to transfer in courseId
    // this.courseId = this.activeRoute.snapshot.params['id']
  
    //+ use to convert string to number
    //when we click previose and next course id updated bt view not update
    //this is occure from snapshot that worklike static 
      
    /*
     this.courseId = +this.activeRoute.snapshot.paramMap.get('id')
     this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId)*/


    //used to make dynamic updatation like see prev & next course
   this.paramsMapobs = 
          this.activeRoute.params.subscribe((data)=>{
          this.courseId = +data['id'];
          this.selectedCourse = this.courseService.courses.find((course)=> course.id == this.courseId)
        })
    
   /*

   The key difference paramsMap,
    you treat the parameters as a Map, whereas with params, you treat them as a JavaScript object.
    Both are used to observe changes in route parameters and react accordingly within 
    your Angular application.

   this.activeRoute.paramMap.subscribe((data)=>{
      this.courseId = +data.get('id');
      this.selectedCourse = this.courseService.courses.find((course)=> course.id == this.courseId)
    })*/
  }
  ngOnDestroy(){
    this.paramsMapobs.unsubscribe();
  }
}
