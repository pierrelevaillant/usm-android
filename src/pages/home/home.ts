import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
    url: string = '/api/posts';
    items: any;

    constructor( private http: Http ) {}

    ionViewDidEnter() {
        this.http.get( this.url )
        .map(res => res.json())
        .subscribe(data => {
          this.items = data;
        });
    }
}
