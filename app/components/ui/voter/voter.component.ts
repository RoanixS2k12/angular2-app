import { 
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { CaretComponent } from './caret.component';

@Component({
    selector : 'voter',
    templateUrl: 'voter.template.html',
    styles: [`
        .votes {
            color: #888;
            width: 40px;
            text-align:center;
        }
        .votes.has-up-voted {
            color: orange;
        }
        .votes.has-down-voted {
            color: red;
        }
        
    `],
    directives : [
        CaretComponent
    ]
})
export class VoterComponent {
    
    @Input() voteCount : number = 10;
    @Input() myVote : number = 0;
    
    @Output() vote : EventEmitter<any> = new EventEmitter();
    
    hasUpVoted : boolean = false;
    hasDownVoted : boolean = false;
    
    currentVoteBalance : number = 0;

    /** Called with the passed in parameters if any */
    ngOnInit() {
        
        if(this.myVote == 1) this.onUpVote();
        if(this.myVote == -1) this.onDownVote();
    }

    onUpVote() {
        this.currentVoteBalance += 1;
        console.log('onUpVote');
        
        if(this.currentVoteBalance > 1) {
            this.currentVoteBalance = 1;
        }   
        this.vote.emit({ currentVote : this.currentVoteBalance}); 
    }
    
    onDownVote() {
        this.currentVoteBalance -= 1;
        console.log('onDownVote');
        
        if(this.currentVoteBalance < -1) {
            this.currentVoteBalance = -1;
        }
        
        this.vote.emit({currentVote : this.currentVoteBalance});
               
    }    
}