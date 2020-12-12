import { Component, OnInit } from '@angular/core';
import { ConstantsProvider } from 'src/app/providers/constants.provider';
import { InformationService } from 'src/app/services/information.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['../../app.component.css']
})

export class MainComponent implements OnInit {

    public personalInfo:any = {};
    public projects = [];
    public responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    constructor(private informationService: InformationService, public constants: ConstantsProvider ) {}

    ngOnInit(): void {
        this.informationService.getPersonalInformation().then(
            (data: any) => {
                this.personalInfo = data;
            }
        );
        this.informationService.getProjects().then(
            (data: Array<any>) => {
                this.projects = data;
            }
        );
    }

    goToContact(url: string): void {
        window.open(url);
    }
}
