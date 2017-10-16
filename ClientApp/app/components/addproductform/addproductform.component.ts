import { ProductInfo } from './../../ProductInfo';
import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {Response, Headers, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'addproductform',
    templateUrl: './addproductform.component.html'
})
export class AddproductformComponent {

    entries:ProductInfo;
    
        constructor(public http: Http, @Inject('BASE_URL') public baseUrl: string,private router:Router ){
            
            
        }
    
        addproduct(productid:number,productname:string,productdescription:string,productrate:number,groupid:number) {
            
            this.entries=new ProductInfo(productid,productname,productdescription,productrate,groupid);
            var headers = new Headers();
            headers.append('Content-Type', 'application/json; charset=utf-8');
            this.http.post(this.baseUrl+'api/productinfo', JSON.stringify(this.entries), { headers: headers }).subscribe((success) => {this.router.navigate(['/productinfo'])});
            
            
            //let link=['/getdetails'];
            //this.router.navigate(link);
                   
        }  
}
