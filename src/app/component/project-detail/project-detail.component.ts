import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['../../app.component.css']
})

export class ProjectDetailComponent implements OnChanges {
    @Input() public project: any = null;
    public safeURL: any = null;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnChanges() {
        if(this.project && this.project.video)
        {
            this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.project.video);
        }
    }

    goToRepository(): void {
        window.open(this.project.url);
    }

}
