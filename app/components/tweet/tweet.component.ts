import { Component, Input } from '@angular/core'
import { Tweet } from './domain/tweet'

import { LikeComponent } from '../ui/like/like.component'
 
@Component({
    selector: 'tweet',
    templateUrl: 'tweet.template.html',
    styles: [`
        .media-left {
            width: 100px;
        }
        
        .tweet {
            margin-bottom: 10px;
        }
    `],
    directives: [
        LikeComponent
    ]
})
export class TweetComponent {
    
    @Input() tweet : Tweet;
    
    
}