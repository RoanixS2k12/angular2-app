import {Component} from '@angular/core';
import { AuthorService } from './authors.service';

@Component({
    selector: 'authors',
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let author of authors">{{author}}</li>
        </ul>
    `,
    providers: [
        AuthorService
    ]
})
export class AuthorsComponent {
    
    title: String = "Authors";
    authors : string[];
    
    constructor(authorService : AuthorService) {
        this.authors = authorService.getAuthors();        
    }
    
}