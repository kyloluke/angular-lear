import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-counter-view',
    templateUrl: './counter-view.component.html',
    styleUrls:[]
})

export class CounterViewComponent {

    @Input('counterView') counter ?: number;
}