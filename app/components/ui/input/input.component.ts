import { Component } from '@angular/core';

@Component({
    selector : 'input-comp',
    template: `
        <div>
            <input type="text" [(ngModel)]="text" />
            <label>Preview : {{ text }}</label>
        </div>
        <div>
            <input type="button" (click)="text = ''" value="Clear" class="btn btn-primary" />
            <button class="btn btn-primary" (click)="text = ''">Clear</button>
        </div>
    `
})
export class InputComponent {
    
    text: String = "Angular app 2.0"
    
}