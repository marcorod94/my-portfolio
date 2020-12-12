import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['../../app.component.css']
})

export class PersonalComponent {
    @Input() public personal: any = null;
}
