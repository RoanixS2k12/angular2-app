import { Component } from '@angular/core';
import { CoursesService } from './courses.service'
import { AutoGrowDirective } from '../../directives/autogrow/auto-grow.directive';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>
    `,
    providers: [
        CoursesService
    ]
})
export class CoursesComponent {
    
    title: String = "Courses";
    courses: string[];
    
    constructor(courseService : CoursesService) {
        
       this.courses = courseService.getCourses();   
    }
        
}