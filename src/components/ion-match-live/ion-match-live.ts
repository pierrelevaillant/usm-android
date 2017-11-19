import { Component, Input } from '@angular/core';
import { USMService } from '../../services/USMService';
import { Fabric } from '../../services/Fabric';

/**
 * Generated class for the IonMatchLiveComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  	selector: 'ion-match-live',
 	templateUrl: 'ion-match-live.html'
})
export class IonMatchLive {
	@Input() match: any;
	post: any;

  	constructor(
  		private USMService: USMService,
      	private Fabric: Fabric
  	) {}

  	ngOnInit() {
        // Get last social post
        this.loadPosts().then( data => {
        	if (data) {
        		this.post = data[0];
        	}
		});
    }

  	loadPosts() {
		return new Promise(resolve => {
			this.USMService.getSocial().subscribe(
                data => {
                    resolve(data.data);
                },
                err => {}
            );
		});
	}

  	btnTapped(event) {
  		this.USMService.sendEncouragement(this.match.id).subscribe(
            data => {
                this.match.encouragement = data.encouragement;
            },
            err => {}
        );

        // Send Fabric event
		this.Fabric.sendCustomEvent('Live match', null);
  	}
}
