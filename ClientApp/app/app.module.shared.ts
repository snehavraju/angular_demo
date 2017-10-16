import { AddproductformComponent } from './components/addproductform/addproductform.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { ProductinfoComponent } from './components/productinfo/productinfo.component';
import { AddgroupformComponent } from './components/addgroupform/addgroupform.component';
import { UpdateformComponent } from './components/updateform/updateform.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { GetdetailsComponent } from './components/getdetails/getdetails.component';
import { AdddetailsComponent } from './components/adddetails/adddetails.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        GetdetailsComponent,
        AdddetailsComponent,
        UpdateformComponent,
        AddgroupformComponent,
        ProductinfoComponent,
        UpdateproductComponent,
        AddproductformComponent
        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'getdetails', component: GetdetailsComponent,
                children:[{ path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'updateform', component: UpdateformComponent },
                { path: 'addgroupform', component: AddgroupformComponent }] },
            { path: 'productinfo', component: ProductinfoComponent,
                children:[{ path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'updateproduct', component: UpdateproductComponent },
                { path: 'addproductform', component: AddproductformComponent }] },

            { path: 'adddetails', component: AdddetailsComponent },
            
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
