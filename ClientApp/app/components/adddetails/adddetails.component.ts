import { FullName } from './../../FullName';
import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
    selector: 'adddetails',
    templateUrl: './adddetails.component.html'
})
export class AdddetailsComponent {

    entries:FullName;


    constructor(public http: Http, @Inject('BASE_URL') public baseUrl: string){
        
    }

    addnames(id:number,firstname:string,lastname:string) {
        
        this.entries=new FullName(id,firstname);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.http.post(this.baseUrl+'api/Name', JSON.stringify(this.entries), { headers: headers }).subscribe();
        //this.http.post(this.baseUrl+'api/Name', this.entry,{headers:headers}).subscribe();
               
    }  

    updatenames(id:number,firstname:string,lastname:string){

        this.entries=new FullName(id,firstname);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.http.put(this.baseUrl+'api/Name/'+id , JSON.stringify(this.entries), { headers: headers }).subscribe();

    }
}