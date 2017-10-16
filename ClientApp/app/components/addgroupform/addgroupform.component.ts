import { Component } from '@angular/core';
import { FullName } from './../../FullName';
import { Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {Response, Headers, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
    selector: 'addgroupform',
    templateUrl: './addgroupform.component.html'
})
export class AddgroupformComponent {
    entries:FullName;

    constructor(public http: Http, @Inject('BASE_URL') public baseUrl: string,private router:Router ){
        
        
    }

    addnames(id:number,groupname:string) {
        
        this.entries=new FullName(id,groupname);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.http.post(this.baseUrl+'api/Name', JSON.stringify(this.entries), { headers: headers }).subscribe((success) => {this.router.navigate(['/getdetails'])});
        
        
        //let link=['/getdetails'];
        //this.router.navigate(link);
               
    }  
}
