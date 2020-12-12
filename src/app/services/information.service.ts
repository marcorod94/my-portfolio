import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class InformationService {

    public baseUrl = 'assets/json';

    constructor(private http: HttpClient) {}

    getPersonalInformation(): Promise<any> {
        return new Promise((resolve) => {
            this.http.get(`${this.baseUrl}/personal.json`).subscribe(
                result => {
                    resolve(result);
                }
            );
        });
    }

    getProjects(): Promise<any> {
        return new Promise((resolve) => {
            this.http.get(`${this.baseUrl}/projects.json`).subscribe(
                result => {
                    resolve(result);
                }
            );
        });
    }
}
