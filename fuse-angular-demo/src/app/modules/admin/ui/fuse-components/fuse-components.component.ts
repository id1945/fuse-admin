import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector     : 'fuse-components',
    templateUrl  : './fuse-components.component.html',
    styleUrls    : ['./fuse-components.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseComponentsComponent implements OnInit, OnDestroy
{
    @ViewChild('matDrawer', {static: true}) matDrawer: MatDrawer;
    drawerMode: 'side' | 'over';
    drawerOpened: boolean;
    menuData: FuseNavigationItem[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _fuseMediaWatcherService: FuseMediaWatcherService
    )
    {
        this.menuData = [
            {
                id      : 'fuse-components.libraries',
                title   : 'Libraries',
                type    : 'group',
                children: [
                    {
                        id   : 'fuse-components.libraries.mock-api',
                        title: 'MockAPI',
                        type : 'basic',
                        link : '/ui/fuse-components/libraries/mock-api'
                    }
                ]
            },
            {
                id      : 'fuse-components.components',
                title   : 'Components',
                type    : 'group',
                children: [
                    {
                        id   : 'fuse-components.components.alert',
                        title: 'Alert',
                        type : 'basic',
                        link : '/ui/fuse-components/components/alert'
                    },
                    {
                        id   : 'fuse-components.components.card',
                        title: 'Card',
                        type : 'basic',
                        link : '/ui/fuse-components/components/card'
                    },
                    {
                        id   : 'fuse-components.components.date-range',
                        title: 'DateRange',
                        type : 'basic',
                        link : '/ui/fuse-components/components/date-range'
                    },
                    {
                        id   : 'fuse-components.components.drawer',
                        title: 'Drawer',
                        type : 'basic',
                        link : '/ui/fuse-components/components/drawer'
                    },
                    {
                        id   : 'fuse-components.components.fullscreen',
                        title: 'Fullscreen',
                        type : 'basic',
                        link : '/ui/fuse-components/components/fullscreen'
                    },
                    {
                        id   : 'fuse-components.components.highlight',
                        title: 'Highlight',
                        type : 'basic',
                        link : '/ui/fuse-components/components/highlight'
                    },
                    {
                        id   : 'fuse-components.components.loading-bar',
                        title: 'Loading Bar',
                        type : 'basic',
                        link : '/ui/fuse-components/components/loading-bar'
                    },
                    {
                        id   : 'fuse-components.components.masonry',
                        title: 'Masonry',
                        type : 'basic',
                        link : '/ui/fuse-components/components/masonry'
                    },
                    {
                        id   : 'fuse-components.components.navigation',
                        title: 'Navigation',
                        type : 'basic',
                        link : '/ui/fuse-components/components/navigation'
                    }
                ]
            },
            {
                id      : 'fuse-components.directives',
                title   : 'Directives',
                type    : 'group',
                children: [
                    {
                        id   : 'fuse-components.directives.scrollbar',
                        title: 'Scrollbar',
                        type : 'basic',
                        link : '/ui/fuse-components/directives/scrollbar'
                    },
                    {
                        id   : 'fuse-components.directives.scroll-reset',
                        title: 'ScrollReset',
                        type : 'basic',
                        link : '/ui/fuse-components/directives/scroll-reset'
                    }
                ]
            },
            {
                id      : 'fuse-components.services',
                title   : 'Services',
                type    : 'group',
                children: [
                    {
                        id   : 'fuse-components.services.config',
                        title: 'Config',
                        type : 'basic',
                        link : '/ui/fuse-components/services/config'
                    },
                    {
                        id   : 'fuse-components.services.confirmation',
                        title: 'Confirmation',
                        type : 'basic',
                        link : '/ui/fuse-components/services/confirmation'
                    },
                    {
                        id   : 'fuse-components.services.splash-screen',
                        title: 'SplashScreen',
                        type : 'basic',
                        link : '/ui/fuse-components/services/splash-screen'
                    },
                    {
                        id   : 'fuse-components.services.media-watcher',
                        title: 'MediaWatcher',
                        type : 'basic',
                        link : '/ui/fuse-components/services/media-watcher'
                    }
                ]
            },
            {
                id      : 'fuse-components.pipes',
                title   : 'Pipes',
                type    : 'group',
                children: [
                    {
                        id   : 'fuse-components.pipes.find-by-key',
                        title: 'FindByKey',
                        type : 'basic',
                        link : '/ui/fuse-components/pipes/find-by-key'
                    }
                ]
            },
            {
                id      : 'fuse-components.validators',
                title   : 'Validators',
                type    : 'group',
                children: [
                    {
                        id   : 'fuse-components.validators.must-match',
                        title: 'MustMatch',
                        type : 'basic',
                        link : '/ui/fuse-components/validators/must-match'
                    }
                ]
            }
        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to media query change
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode and drawerOpened
                if ( matchingAliases.includes('md') )
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
                else
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
