import { 
    Component,
    Input
} from '@angular/core';

import {
    BootstrapPanelComponent
} from '../panel/panel.component';

@Component({
    selector : 'zippy',
    directives: [BootstrapPanelComponent],
    template: `
        <bs-panel>
            <div class="heading" (click)="onClickHeading()">
                <h2>
                    {{ title }} <i class="pull-right fa" [ngClass]="{
                        'fa-chevron-up' : isOpen,
                        'fa-chevron-down' : !isOpen
                    }"></i>
                </h2>
            </div>
            <div class="body" *ngIf="isOpen">
                <ng-content></ng-content>    
            </div>
        </bs-panel>
    `
})
export class ZippyComponent {
    
    @Input() title: string;
    isOpen : boolean = false;
    
    onClickHeading() {
        this.isOpen = !this.isOpen;
    }
    
}