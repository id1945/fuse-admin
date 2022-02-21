import { Component, ViewEncapsulation } from '@angular/core';
import { FuseNavigationItem } from '@fuse/components/navigation/navigation.types';

@Component({
    selector     : 'demo-sidebar',
    template     : `
        <div class="py-10">
            <!-- Add any extra content that might be supplied with the component -->
            <div class="extra-content">
                <ng-content></ng-content>
            </div>

            <!-- Fixed demo sidebar -->
            <div class="mx-6 text-3xl font-bold tracking-tighter">Demo Sidebar</div>
            <fuse-vertical-navigation
                [appearance]="'default'"
                [navigation]="menuData"
                [inner]="true"
                [mode]="'side'"
                [name]="'demo-sidebar-navigation'"
                [opened]="true"></fuse-vertical-navigation>

            <!-- Storage -->
            <div class="mx-6 mt-2">
                <div class="flex items-center">
                    <mat-icon
                        class="mr-2 icon-size-5"
                        [svgIcon]="'heroicons_solid:database'"></mat-icon>
                    <div class="text-lg font-semibold">Storage</div>
                </div>
                <div class="flex flex-col flex-auto mt-4">
                    <span class="text-sm leading-none mb-3">19.9 GB of 100 GB used</span>
                    <mat-progress-bar
                        [mode]="'determinate'"
                        [color]="'primary'"
                        [value]="19.9"></mat-progress-bar>
                </div>
            </div>

            <!-- Users -->
            <div class="mx-6 mt-10">
                <div class="flex items-center">
                    <mat-icon
                        class="mr-2 icon-size-5"
                        [svgIcon]="'heroicons_solid:users'"></mat-icon>
                    <div class="text-lg font-semibold">Users</div>
                </div>
                <div class="flex flex-col flex-auto mt-4">
                    <span class="text-sm leading-none mb-3">8 of 20 users used</span>
                    <mat-progress-bar
                        [mode]="'determinate'"
                        [color]="'accent'"
                        [value]="40"></mat-progress-bar>
                </div>
            </div>
        </div>
    `,
    styles       : [
        `
            demo-sidebar fuse-vertical-navigation .fuse-vertical-navigation-wrapper {
                box-shadow: none !important;
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class DemoSidebarComponent
{
    menuData: FuseNavigationItem[];

    /**
     * Constructor
     */
    constructor()
    {
        this.menuData = [
            {
                title   : 'Actions',
                subtitle: 'Task, project & team',
                type    : 'group',
                children: [
                    {
                        title: 'Create task',
                        type : 'basic',
                        icon : 'heroicons_outline:plus-circle'
                    },
                    {
                        title: 'Create team',
                        type : 'basic',
                        icon : 'heroicons_outline:user-group'
                    },
                    {
                        title: 'Create project',
                        type : 'basic',
                        icon : 'heroicons_outline:briefcase'
                    },
                    {
                        title: 'Create user',
                        type : 'basic',
                        icon : 'heroicons_outline:user-add'
                    },
                    {
                        title   : 'Assign user or team',
                        subtitle: 'Assign to a task or a project',
                        type    : 'basic',
                        icon    : 'heroicons_outline:badge-check'
                    }
                ]
            },
            {
                title   : 'Tasks',
                type    : 'group',
                children: [
                    {
                        title: 'All tasks',
                        type : 'basic',
                        icon : 'heroicons_outline:clipboard-list',
                        badge: {
                            title  : '49',
                            classes: 'px-2 bg-primary text-on-primary rounded-full'
                        }
                    },
                    {
                        title: 'Ongoing tasks',
                        type : 'basic',
                        icon : 'heroicons_outline:clipboard-copy'
                    },
                    {
                        title: 'Completed tasks',
                        type : 'basic',
                        icon : 'heroicons_outline:clipboard-check'
                    },
                    {
                        title: 'Abandoned tasks',
                        type : 'basic',
                        icon : 'heroicons_outline:clipboard'
                    },
                    {
                        title: 'Assigned to me',
                        type : 'basic',
                        icon : 'heroicons_outline:user'
                    },
                    {
                        title: 'Assigned to my team',
                        type : 'basic',
                        icon : 'heroicons_outline:users'
                    }
                ]
            },
            {
                title   : 'Settings',
                type    : 'group',
                children: [
                    {
                        title   : 'General',
                        type    : 'collapsable',
                        icon    : 'heroicons_outline:cog',
                        children: [
                            {
                                title: 'Tasks',
                                type : 'basic'
                            },
                            {
                                title: 'Users',
                                type : 'basic'
                            },
                            {
                                title: 'Teams',
                                type : 'basic'
                            }
                        ]
                    },
                    {
                        title   : 'Account',
                        type    : 'collapsable',
                        icon    : 'heroicons_outline:user-circle',
                        children: [
                            {
                                title: 'Personal',
                                type : 'basic'
                            },
                            {
                                title: 'Payment',
                                type : 'basic'
                            },
                            {
                                title: 'Security',
                                type : 'basic'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'divider'
            }
        ];
    }
}
