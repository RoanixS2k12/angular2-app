import { 
    Component, 
    Input,
    Output, 
    EventEmitter 
} from '@angular/core'

@Component({
    selector: "favorite",
    templateUrl : "favorite.template.html",
    styles: [`
        .fa.fa-star {
            color: orange
        }
    `]
})
export class FavoriteComponent  {
  
    /** Inputs */
    @Input() isFavorite : boolean = false;
    
    /** Outputs */
    @Output() change : EventEmitter<any> =  new EventEmitter();
    
    toggleFavorite() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue : this.isFavorite});
    }
    
}