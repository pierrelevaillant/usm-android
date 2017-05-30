import 'rxjs/add/operator/map';

export class Fabric {
  
    constructor() {}

    private isDevice() {
    	if (typeof (<any>window).fabric  === 'undefined') return false;
    	return true;
    }

    //
    // Fabric events
    //

    sendCustomEvent(name: string, attributes: any) {
    	if (!this.isDevice()) return;
    	(<any>window).fabric.Answers.sendCustomEvent(name, attributes);
    }

}