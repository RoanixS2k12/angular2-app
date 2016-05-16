import { 
    Component,
    Input 
} from '@angular/core'

@Component({
    selector : 'like',
    templateUrl : 'like.template.html',
    styles: [`
        .fa.fa-heart {
            color : #ccc;    
        }
        
        .fa.fa-heart:hover {
            cursor: pointer;
        }
        
        .fa.fa-heart.is-liked {
            color: deeppink;
        }
    `]
})
export class LikeComponent {
    
    @Input() isLiked : boolean = false;
    @Input() nbLikes : number = 10;
    
    onLikeClick() {
        this.isLiked ? this.decrement() : this.increment();
        this.isLiked = !this.isLiked;
    }
    
    decrement() {
        this.nbLikes -= 1;
    }
    
    increment() {
        this.nbLikes += 1;
    }
    
}