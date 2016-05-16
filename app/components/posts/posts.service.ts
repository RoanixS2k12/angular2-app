import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Post } from './domain/post';

@Injectable()
export class PostsService {
    
    private _url = 'http://jsonplaceholder.typicode.com/posts';
    
    constructor(private _http: Http) {}
    
    getPosts(): Promise<Post[]> {
        return this._http.get(this._url)
            .map(response => response.json())
            .toPromise();
    }
    
    createPost(post: Post) {
        return this._http.post(this._url, JSON.stringify(post))
            .map(response => response.json());
    }
    
}
