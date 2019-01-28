import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonPostComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
 @Component({
 	selector: 'ion-post',
 	templateUrl: 'ion-post.html'
 })
 export class IonPost {
 	@Input() post: any;

 	constructor() {}

 }
