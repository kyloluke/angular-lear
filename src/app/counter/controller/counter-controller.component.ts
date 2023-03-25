import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-counter-controller',
    templateUrl: './counter-controller.component.html',
    styleUrls: []
})

export class counterControllerComponent {
    @Output() onIncrement = new EventEmitter()
    
    increment(inc: number){
        this.onIncrement.next(inc);
    }
}