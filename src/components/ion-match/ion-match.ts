import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonMatchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  	selector: 'ion-match',
  	templateUrl: 'ion-match.html'
})
export class IonMatch {
	@Input() match: any;
	@Input() recap: boolean = false;

  	constructor() {
  		//
  	}

}
