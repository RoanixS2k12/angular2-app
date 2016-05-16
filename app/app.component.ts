import { Component } from '@angular/core';
import { PostsComponent } from './components/posts/posts.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <h1>{{ title }}</h1>
            <posts></posts>
        </div>
    `,
    directives: [
        PostsComponent     
    ]
})
export class AppComponent { 
    title: String = "Posts"; 
}
