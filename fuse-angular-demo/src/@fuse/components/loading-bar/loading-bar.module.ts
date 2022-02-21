import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FuseLoadingBarComponent } from '@fuse/components/loading-bar/loading-bar.component';
import { FuseLoadingBarInterceptor } from '@fuse/components/loading-bar/loading-bar.interceptor';

@NgModule({
    declarations: [
        FuseLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        FuseLoadingBarComponent
    ],
    providers   : [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: FuseLoadingBarInterceptor,
            multi   : true
        }
    ]
})
export class FuseLoadingBarModule
{
}
