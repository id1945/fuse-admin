import { NgModule } from '@angular/core';
import { FuseSplashScreenService } from '@fuse/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        FuseSplashScreenService
    ]
})
export class FuseSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _fuseSplashScreenService: FuseSplashScreenService)
    {
    }
}
