import { FullName } from './../../FullName';
import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'getdetails',
    templateUrl: './getdetails.component.html'
})
export class GetdetailsComponent {
    public student: FullName[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Name').subscribe(result => {
            this.student = result.json() as FullName[];
        }, error => console.error(error));
    }
}

