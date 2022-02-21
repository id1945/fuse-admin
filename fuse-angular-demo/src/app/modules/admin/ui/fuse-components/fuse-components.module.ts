import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { FuseCardModule } from '@fuse/components/card';
import { FuseDateRangeModule } from '@fuse/components/date-range';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseMasonryModule } from '@fuse/components/masonry/masonry.module';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { SharedModule } from 'app/shared/shared.module';
import { FuseComponentsComponent } from 'app/modules/admin/ui/fuse-components/fuse-components.component';
import { MockApiComponent } from 'app/modules/admin/ui/fuse-components/libraries/mock-api/mock-api.component';
import { AlertComponent } from 'app/modules/admin/ui/fuse-components/components/alert/alert.component';
import { CardComponent } from 'app/modules/admin/ui/fuse-components/components/card/card.component';
import { DateRangeComponent } from 'app/modules/admin/ui/fuse-components/components/date-range/date-range.component';
import { DrawerComponent } from 'app/modules/admin/ui/fuse-components/components/drawer/drawer.component';
import { FullscreenComponent } from 'app/modules/admin/ui/fuse-components/components/fullscreen/fullscreen.component';
import { HighlightComponent } from 'app/modules/admin/ui/fuse-components/components/highlight/highlight.component';
import { NavigationComponent } from 'app/modules/admin/ui/fuse-components/components/navigation/navigation.component';
import { MasonryComponent } from 'app/modules/admin/ui/fuse-components/components/masonry/masonry.component';
import { ScrollbarComponent } from 'app/modules/admin/ui/fuse-components/directives/scrollbar/scrollbar.component';
import { ScrollResetComponent } from 'app/modules/admin/ui/fuse-components/directives/scroll-reset/scroll-reset.component';
import { ConfigComponent } from 'app/modules/admin/ui/fuse-components/services/config/config.component';
import { ConfirmationComponent } from 'app/modules/admin/ui/fuse-components/services/confirmation/confirmation.component';
import { LoadingBarComponent } from 'app/modules/admin/ui/fuse-components/components/loading-bar/loading-bar.component';
import { MediaWatcherComponent } from 'app/modules/admin/ui/fuse-components/services/media-watcher/media-watcher.component';
import { SplashScreenComponent } from 'app/modules/admin/ui/fuse-components/services/splash-screen/splash-screen.component';
import { FindByKeyComponent } from 'app/modules/admin/ui/fuse-components/pipes/find-by-key/find-by-key.component';
import { MustMatchComponent } from 'app/modules/admin/ui/fuse-components/validators/must-match/must-match.component';
import { fuseComponentsRoutes } from 'app/modules/admin/ui/fuse-components/fuse-components.routing';

@NgModule({
    declarations: [
        FuseComponentsComponent,
        MockApiComponent,
        AlertComponent,
        CardComponent,
        DateRangeComponent,
        DrawerComponent,
        FullscreenComponent,
        HighlightComponent,
        LoadingBarComponent,
        MasonryComponent,
        NavigationComponent,
        ScrollbarComponent,
        ScrollResetComponent,
        ConfigComponent,
        ConfirmationComponent,
        SplashScreenComponent,
        MediaWatcherComponent,
        FindByKeyComponent,
        MustMatchComponent
    ],
    imports     : [
        RouterModule.forChild(fuseComponentsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSidenavModule,
        MatTabsModule,
        MatTreeModule,
        FuseAlertModule,
        FuseCardModule,
        FuseDateRangeModule,
        FuseDrawerModule,
        FuseHighlightModule,
        FuseMasonryModule,
        FuseNavigationModule,
        FuseScrollResetModule,
        SharedModule
    ]
})
export class FuseComponentsModule
{
}
