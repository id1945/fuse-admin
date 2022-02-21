import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseFullscreenComponent } from '@fuse/components/fullscreen/fullscreen.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FuseFullscreenComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        CommonModule
    ],
    exports     : [
        FuseFullscreenComponent
    ]
})
export class FuseFullscreenModule
{
}
