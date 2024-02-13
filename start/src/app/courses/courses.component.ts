import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesService = inject(CourseService);
  AllCourses: Course[] = this.coursesService.courses;
  searchString:string;

  activateRoute:ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(){

    // this.searchString = this.activateRoute.snapshot.queryParams['search'];
    // this.searchString = this.activateRoute.snapshot.queryParamMap.get('search');
    // console.log(this.searchString);

    this.activateRoute.queryParamMap.subscribe((data) => {
      this.searchString = data.get('search');

      if(this.searchString === undefined || this.searchString === '' || this.searchString === null){

        // this.AllCourses = this.activateRoute.snapshot.data['courses'];
        
        this.coursesService.getAllcourses().subscribe((data: Course[]) => {
          this.AllCourses = data;
        });

      }else{
        
        this.AllCourses = this.coursesService.courses
          .filter(x => x.title.toLowerCase()
          .includes(this.searchString.toLowerCase()));
      }
    })
  }
}
