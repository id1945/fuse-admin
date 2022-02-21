import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface PageLayoutsOverviewData
{
    title: string;
    description: string;
    availableOptions: {
        value: string;
        title: string;
    }[];
    selectedOption: string;
    options: {
        [option: string]: {
            description: string;
            link: string;
            component: any;
        };
    };
}

@Component({
    selector     : 'layout-overview',
    template     : `
        <div class="w-full max-w-320 mx-auto px-6 md:px-8">
            <div class="py-8">
                <!-- Info -->
                <div>
                    <div class="text-3xl md:text-4xl font-extrabold tracking-tight">{{overview.title}}</div>
                    <div class="text-lg md:text-xl text-secondary">{{overview.description}}</div>
                    <div class="mt-6 md:mt-8">
                        <mat-button-toggle-group
                            class="flex flex-wrap items-center -m-2"
                            name="options"
                            [(ngModel)]="overview.selectedOption">
                            <mat-button-toggle
                                *ngFor="let option of overview.availableOptions"
                                class="m-2 font-medium bg-transparent"
                                [ngClass]="{'bg-gray-200 dark:bg-gray-700': option.value === overview.selectedOption}"
                                [value]="option.value">
                                {{option.title}}
                            </mat-button-toggle>
                        </mat-button-toggle-group>
                    </div>
                </div>
                <!-- Options -->
                <ng-container *ngIf="overview.options[overview.selectedOption] as selectedOption">
                    <div>
                        <!-- Preview -->
                        <div class="z-20 relative mt-10 h-192 ring-1 ring-gray-300 rounded-2xl shadow-xl overflow-auto dark:ring-gray-700">
                            <div class="flex flex-auto min-h-full">
                                <!-- Navigation -->
                                <div class="hidden md:block sticky top-0 flex-0 w-56 h-192 border-r border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                    <div class="h-4"></div>
                                    <div class="w-2/3 h-4 m-6 rounded bg-gray-300 dark:bg-gray-700"></div>
                                    <div class="w-3/4 h-4 m-6 rounded bg-gray-300 dark:bg-gray-700"></div>
                                    <div class="w-2/3 h-4 m-6 rounded bg-gray-300 dark:bg-gray-700"></div>
                                    <div class="w-1/2 h-4 m-6 rounded bg-gray-300 dark:bg-gray-700"></div>
                                    <div class="w-2/3 h-4 m-6 rounded bg-gray-300 dark:bg-gray-700"></div>
                                </div>
                                <!-- Content -->
                                <div class="flex flex-col flex-auto">
                                    <!-- Header -->
                                    <div
                                        class="relative z-10 flex items-center justify-end h-16 px-6 sm:px-10
                                               border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                        <div class="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                                    </div>
                                    <!-- Main -->
                                    <div
                                        id="component-container"
                                        class="relative flex flex-col flex-auto">
                                        <ng-container *ngComponentOutlet="selectedOption.component"></ng-container>
                                    </div>
                                    <!-- Footer -->
                                    <div class="relative z-10 flex items-center h-14 px-6 sm:px-10 border-t border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                        <div class="w-32 h-4 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Preview details -->
                        <div class="flex items-center justify-between mt-8">
                            <div>
                                <div>{{selectedOption.description}}</div>
                                <div class="mt-1">
                                    <code class="text-md">/src/app/modules/admin{{selectedOption.link}}/</code>
                                </div>
                            </div>
                            <div *ngIf="selectedOption.link">
                                <button
                                    mat-flat-button
                                    [color]="'primary'"
                                    [routerLink]="selectedOption.link">
                                    <mat-icon
                                        class="mr-2 icon-size-5"
                                        [svgIcon]="'heroicons_solid:external-link'"></mat-icon>
                                    <span>View</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </ng-container>
            </div>
        </div>
    `,
    styles       : [
        `
            layout-overview #component-container > *:first-child {
                position: relative;
                display: flex;
                flex-direction: column;
                flex: 1 1 auto;
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class LayoutOverviewComponent implements OnInit
{
    overview: PageLayoutsOverviewData;

    /**
     * Constructor
     */
    constructor(private _activatedRoute: ActivatedRoute)
    {
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the route data
        this.overview = this._activatedRoute.snapshot.data.overview;
    }
}
