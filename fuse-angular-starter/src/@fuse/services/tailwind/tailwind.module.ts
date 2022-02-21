import { NgModule } from '@angular/core';
import { FuseTailwindService } from '@fuse/services/tailwind/tailwind.service';

@NgModule({
    providers: [
        FuseTailwindService
    ]
})
export class FuseTailwindConfigModule
{
    /**
     * Constructor
     */
    constructor(private _fuseTailwindConfigService: FuseTailwindService)
    {
    }
}
