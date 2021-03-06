import { FullName } from './../../FullName';
import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import { Router, ActivatedRoute, ParamMap,NavigationEnd } from '@angular/router';


@Component({
    selector: 'getdetails',
    templateUrl: './getdetails.component.html'
})
export class GetdetailsComponent implements OnInit {
    public student: FullName[];

    public static returned: Subject<any> = new Subject();
    
    constructor(public http: Http, @Inject('BASE_URL') public baseUrl: string,private router:Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = function(){
            return false;
         }
    
         this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
               // trick the Router into believing it's last link wasn't previously loaded
               this.router.navigated = false;
               // if you need to scroll back to top, here is the right place
               window.scrollTo(0, 0);
            }
        });
    
    }

    ngOnInit() {
        this.http.get(this.baseUrl + 'api/Name').subscribe(result => {
            this.student = result.json() as FullName[];
        }, error => console.error(error));
              
        
            
               
    }
    deletename(id:number){
        
        this.http.delete(this.baseUrl+'api/Name/'+id).subscribe((success) => {this.http.get(this.baseUrl+'api/Name').subscribe(result => {
            this.student = result.json() as FullName[];}, error => console.error(error));
            
          },);
        

    }
}

