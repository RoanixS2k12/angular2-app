import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { OnInit } from '@angular/core';

@Component({
    selector: 'posts',
    templateUrl: 'posts.template.html',
    providers: [
        PostsService, HTTP_PROVIDERS
    ]
})
export class PostsComponent implements OnInit {
    
    isLoading = true;
    
    constructor(private _postsService : PostsService) {
        
    }
    
    ngOnInit() {
        
        this._postsService.getPosts()
            .then(data => {
                this.isLoading = false;
              console.log(data)  
            } 
    }
    
}