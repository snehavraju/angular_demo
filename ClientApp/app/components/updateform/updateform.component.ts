import { Component } from '@angular/core';
import { FullName } from './../../FullName';
import { Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {Response, Headers, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'updateform',
    templateUrl: './updateform.component.html'
})
export class UpdateformComponent {

    
        public student: FullName[];
        entries:FullName;
        
        
            constructor(public http: Http, @Inject('BASE_URL') public baseUrl: string,public router: Router, private route: ActivatedRoute){
                
            }
            updatenames(id:number,firstname:string){
                this.entries=new FullName(id,firstname);
                var headers = new Headers();
                headers.append('Content-Type', 'application/json; charset=utf-8');
                this.http.put(this.baseUrl+'api/Name/'+id , JSON.stringify(this.entries), { headers: headers }).subscribe((success) => {this.router.navigate(['/getdetails'])});
                
        
            
}}
