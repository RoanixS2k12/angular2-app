import { Tweet } from './domain/tweet';

export class TweetsService {
    
    tweets : Tweet[] = [
        new Tweet('http://lorempixel.com/100/100/people?1', '@roanixs', 'Tweet 1', 1, 'This is a first tweet', true),
        new Tweet('http://lorempixel.com/100/100/people?2', '@roanixs', 'Tweet 2', 5, 'This is a second tweet', false),
        new Tweet('http://lorempixel.com/100/100/people?3', '@roanixs', 'Tweet 3', 3, 'This is a third tweet', true),
        new Tweet('http://lorempixel.com/100/100/people?4', '@roanixs', 'Tweet 4', 2, 'This is a fourth tweet', true),
        new Tweet('http://lorempixel.com/100/100/people?5', '@roanixs', 'Tweet 5', 0, 'This is a fifth tweet', false)
    ];
    
    getTweets() : Tweet[] {
        return this.tweets;
    }
    
}