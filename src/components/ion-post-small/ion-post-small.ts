import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonPostSmallComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ion-post-small',
  templateUrl: 'ion-post-small.html'
})
export class IonPostSmall {
  @Input() post: any;

  constructor() {
	//
  }

}
