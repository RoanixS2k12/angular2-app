import { 
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector : 'caret',
    templateUrl: 'caret.template.html',
    styles: [`
        .fa {
            color: #888;
            font-size: 1.7em;
            width: 40px;
            text-align:center;
        }
        
        .fa.has-up-voted {
            color: orange;
        }
        
        .fa.has-down-voted {
            color: red;
        }
        
        .fa:hover {
            cursor:pointer;
        }
    `]
})
export class CaretComponent {
    
    @Input() isUp : boolean = false;
    @Input() isDown : boolean = false;       
    @Input() hasVoted : boolean = false; 
    @Input() currentVoteBalance : number = 0;
    
    @Output() change : EventEmitter<any> = new EventEmitter();
    
    onChange() {
        if(this.isUp) {
            this.change.emit(null);
        } else {
            this.change.emit(null);
        }
    }
    
    getCurrentVoteStatus() {
        if(this.isUp && this.currentVoteBalance == 1) return true;
        if(this.isDown && this.currentVoteBalance == -1) return true;
        return false;
    }
    
}