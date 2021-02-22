import { Component } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-portfolio';
    public items = [
        {
            label: 'About me',
            icon: 'fas fa-user-secret',
            routerLink: ['/main'],
            fragment: 'personal'
        },
        {
            label: 'Projects',
            icon: 'fas fa-project-diagram',
            routerLink: ['/main'],
            fragment: 'videogames'
        },
        {
            label: 'Contact',
            icon: 'fas fa-id-card',
            routerLink: ['/main'],
            fragment: 'contact'
        },
        {
            label: 'CV',
            icon: 'fas fa-id-card-alt',
            command: () => 
            {
                const pdfUrl = './assets/pdf/cv.pdf';
                const pdfName = 'Marco_Rodriguez_CV';
                FileSaver.saveAs(pdfUrl, pdfName);
            }
        }
    ];
}
