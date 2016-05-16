import { Component } from '@angular/core'

@Component({
    selector: 'button-comp',
    template: `
        <div (click)="onClickDiv($event)">
            <button class="btn btn-primary" [class.active]="isActive" (click)="onClick($event)">
                {{ buttonText }}
            </button>
        </div>
    `
})
export class ButtonComponent {
    
    buttonText : String = "My button text";
    isActive : Boolean = false;
    
    onClickDiv() {
        console.log("On div click");
        
    }
    
    onClick($event: Event) {
        $event.stopPropagation();
        console.log("On button click");
        
        this.isActive = !this.isActive;
    }
    
}