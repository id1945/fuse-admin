import { Component } from '@angular/core';
import { FuseNavigationItem, FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { FuseComponentsComponent } from 'app/modules/admin/ui/fuse-components/fuse-components.component';

@Component({
    selector   : 'navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent
{
    /**
     * Constructor
     */
    constructor(
        private _fuseNavigationService: FuseNavigationService,
        private _fuseComponentsComponent: FuseComponentsComponent
    )
    {

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get navigation item
     *
     * @param itemId
     * @param navigationName
     */
    getNavItem(itemId, navigationName): FuseNavigationItem | null
    {
        // Get the component -> navigation data -> item
        const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(navigationName);

        // Return if the navigation component does not exist
        if ( !navComponent )
        {
            return null;
        }

        // Get the navigation item
        const navigation = navComponent.navigation;
        const item = this._fuseNavigationService.getItem(itemId, navigation);
        console.log(item);
        return item;
    }

    /**
     * Update badge title
     *
     * @param itemId
     * @param navigationName
     * @param title
     */
    updateBadgeTitle(itemId, navigationName, title): void
    {
        // Get the component -> navigation data -> item
        const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(navigationName);

        // Return if the navigation component does not exist
        if ( !navComponent )
        {
            return null;
        }

        // Get the navigation item, update the badge and refresh the component
        const navigation = navComponent.navigation;
        const item = this._fuseNavigationService.getItem(itemId, navigation);
        item.badge.title = title;
        navComponent.refresh();
    }

    /**
     * Toggle disabled status
     *
     * @param itemId
     * @param navigationName
     */
    toggleDisabled(itemId, navigationName): void
    {
        // Get the component -> navigation data -> item
        const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(navigationName);

        // Return if the navigation component does not exist
        if ( !navComponent )
        {
            return null;
        }

        // Get the navigation item, update the badge and refresh the component
        const navigation = navComponent.navigation;
        const item = this._fuseNavigationService.getItem(itemId, navigation);
        item.disabled = !item.disabled;
        navComponent.refresh();
    }

    /**
     * Swap navigation data
     *
     * @param navigationName
     */
    swapNavigationData(navigationName): void
    {
        // Get the component -> navigation data -> item
        const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(navigationName);

        // Return if the navigation component does not exist
        if ( !navComponent )
        {
            return null;
        }

        // A navigation data to replace with
        const newNavigation: FuseNavigationItem[] = [
            {
                id      : 'supported-components',
                title   : 'Supported components',
                subtitle: 'Compatible third party components',
                type    : 'group',
                icon    : 'memory',
                children: [
                    {
                        id   : 'supported-components.apex-charts',
                        title: 'ApexCharts',
                        type : 'basic',
                        icon : 'insert_chart',
                        link : '/supported-components/apex-charts'
                    },
                    {
                        id   : 'supported-components.full-calendar',
                        title: 'FullCalendar',
                        type : 'basic',
                        icon : 'today',
                        link : '/supported-components/full-calendar'
                    },
                    {
                        id   : 'supported-components.google-maps',
                        title: 'Google Maps',
                        type : 'basic',
                        icon : 'map',
                        link : '/supported-components/google-maps'
                    },
                    {
                        id   : 'supported-components.ngx-markdown',
                        title: 'ngx-markdown',
                        type : 'basic',
                        icon : 'text_format',
                        link : '/supported-components/ngx-markdown'
                    },
                    {
                        id   : 'supported-components.quill-editor',
                        title: 'Quill editor',
                        type : 'basic',
                        icon : 'font_download',
                        link : '/supported-components/quill-editor'
                    },
                    {
                        id   : 'supported-components.youtube-player',
                        title: 'Youtube player',
                        type : 'basic',
                        icon : 'play_circle_filled',
                        link : '/supported-components/youtube-player'
                    }
                ]
            }
        ];

        // Replace the navigation data
        navComponent.navigation = newNavigation;
        navComponent.refresh();
    }

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._fuseComponentsComponent.matDrawer.toggle();
    }
}
