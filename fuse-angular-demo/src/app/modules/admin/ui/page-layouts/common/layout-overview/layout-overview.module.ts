import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'app/shared/shared.module';
import { LayoutOverviewComponent } from 'app/modules/admin/ui/page-layouts/common/layout-overview/layout-overview.component';

@NgModule({
    declarations: [
        LayoutOverviewComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild([]),
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatTabsModule
    ],
    exports     : [
        LayoutOverviewComponent
    ]
})
export class LayoutOverviewModule
{
}
