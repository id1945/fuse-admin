import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { takeUntil } from 'rxjs/operators';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Subject } from 'rxjs';

@Component({
    selector       : 'guides',
    templateUrl    : './guides.component.html',
    styleUrls      : ['./guides.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuidesComponent implements OnInit, OnDestroy
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
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseMediaWatcherService: FuseMediaWatcherService
    )
    {
        this.menuData = [
            {
                id      : 'getting-started',
                title   : 'Getting started',
                type    : 'group',
                children: [
                    {
                        id   : 'getting-started.introduction',
                        title: 'Introduction',
                        type : 'basic',
                        link : '/docs/guides/getting-started/introduction'
                    },
                    {
                        id   : 'getting-started.prerequisites',
                        title: 'Prerequisites',
                        type : 'basic',
                        link : '/docs/guides/getting-started/prerequisites'
                    },
                    {
                        id   : 'getting-started.installation',
                        title: 'Installation',
                        type : 'basic',
                        link : '/docs/guides/getting-started/installation'
                    },
                    {
                        id   : 'getting-started.serving',
                        title: 'Serving',
                        type : 'basic',
                        link : '/docs/guides/getting-started/serving'
                    }
                ]
            },
            {
                id      : 'development',
                title   : 'Development',
                type    : 'group',
                children: [
                    {
                        id   : 'development.directory-structure',
                        title: 'Directory structure',
                        type : 'basic',
                        link : '/docs/guides/development/directory-structure'
                    },
                    {
                        id   : 'development.component-structure',
                        title: 'Component structure',
                        type : 'basic',
                        link : '/docs/guides/development/component-structure'
                    },
                    {
                        id   : 'development.starter-kit',
                        title: 'Starter kit',
                        type : 'basic',
                        link : '/docs/guides/development/starter-kit'
                    },
                    {
                        id   : 'development.deployment',
                        title: 'Deployment',
                        type : 'basic',
                        link : '/docs/guides/development/deployment'
                    },
                    {
                        id   : 'development.updating',
                        title: 'Updating',
                        type : 'basic',
                        link : '/docs/guides/development/updating'
                    }
                ]
            },
            {
                id      : 'customization',
                title   : 'Customization',
                type    : 'group',
                children: [
                    {
                        id   : 'customization.theme-layouts',
                        title: 'Theme layouts',
                        type : 'basic',
                        link : '/docs/guides/customization/theme-layouts'
                    },
                    {
                        id   : 'customization.page-layouts',
                        title: 'Page layouts',
                        type : 'basic',
                        link : '/docs/guides/customization/page-layouts'
                    },
                    {
                        id   : 'customization.tailwindcss',
                        title: 'TailwindCSS',
                        type : 'basic',
                        link : '/docs/guides/customization/tailwindcss'
                    },
                    {
                        id   : 'customization.theming',
                        title: 'Theming',
                        type : 'basic',
                        link : '/docs/guides/customization/theming'
                    },
                    {
                        id   : 'customization.component-theming',
                        title: 'Component theming',
                        type : 'basic',
                        link : '/docs/guides/customization/component-theming'
                    },
                    {
                        id   : 'customization.splash-screen',
                        title: 'Splash screen',
                        type : 'basic',
                        link : '/docs/guides/customization/splash-screen'
                    },
                    {
                        id   : 'customization.multi-language',
                        title: 'Multi language',
                        type : 'basic',
                        link : '/docs/guides/customization/multi-language'
                    }
                ]
            },
            {
                id      : 'authentication',
                title   : 'Authentication',
                type    : 'group',
                children: [
                    {
                        id   : 'authentication.jwt',
                        title: 'JWT',
                        type : 'basic',
                        link : '/docs/guides/authentication/jwt'
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

                // Mark for check
                this._changeDetectorRef.markForCheck();
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
