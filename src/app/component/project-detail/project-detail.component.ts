import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['../../app.component.css']
})

export class ProjectDetailComponent {
    @Input() public project: any = null;

    goToRepository(): void {
        window.open(this.project.url);
    }
}
