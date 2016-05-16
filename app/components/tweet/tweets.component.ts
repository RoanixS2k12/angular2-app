import { Component } from '@angular/core';
import { Tweet } from './domain/tweet';
import { TweetsService } from './tweets.service';
import { TweetComponent } from './tweet.component';

@Component({
    selector : 'tweets',
    template : `
        <div *ngFor="let tweet of tweets">
            <tweet [tweet]="tweet"></tweet>
        </div>
    `,
    directives: [
        TweetComponent
    ],
    providers: [
        TweetsService
    ]
})
export class TweetsComponent {
    
    tweets : Tweet[];
    
    /**
     *
     */
    constructor(tweetsService : TweetsService) {
        console.log('Tweets component created');
        
        this.tweets = tweetsService.getTweets();
    }
    
}