import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as moment from 'moment';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { CryptoService } from 'app/modules/admin/dashboards/crypto/crypto.service';

@Component({
    selector       : 'crypto',
    templateUrl    : './crypto.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoComponent implements OnInit, OnDestroy
{
    @ViewChild('btcChartComponent') btcChartComponent: ChartComponent;
    appConfig: any;
    btcOptions: ApexOptions = {};
    data: any;
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    watchlistChartOptions: ApexOptions = {};
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _cryptoService: CryptoService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseMediaWatcherService: FuseMediaWatcherService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode and drawerOpened if 'lg' breakpoint is active
                if ( matchingAliases.includes('lg') )
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

        // Get the data
        this._cryptoService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {

                // Store the data
                this.data = data;

                // Prepare the chart data
                this._prepareChartData();
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

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Prepare the chart data from the data
     *
     * @private
     */
    private _prepareChartData(): void
    {
        // BTC
        this.btcOptions = {
            chart     : {
                animations: {
                    enabled: false
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                width     : '100%',
                height    : '100%',
                type      : 'line',
                toolbar   : {
                    show: false
                },
                zoom      : {
                    enabled: false
                }
            },
            colors    : ['#5A67D8'],
            dataLabels: {
                enabled: false
            },
            grid      : {
                borderColor    : 'var(--fuse-border)',
                position       : 'back',
                show           : true,
                strokeDashArray: 6,
                xaxis          : {
                    lines: {
                        show: true
                    }
                },
                yaxis          : {
                    lines: {
                        show: true
                    }
                }
            },
            legend    : {
                show: false
            },
            series    : this.data.btc.price.series,
            stroke    : {
                width: 2,
                curve: 'straight'
            },
            tooltip   : {
                shared: true,
                theme : 'dark',
                y     : {
                    formatter: (value: number): string => '$' + value.toFixed(2)
                }
            },
            xaxis     : {
                type      : 'numeric',
                crosshairs: {
                    show    : true,
                    position: 'back',
                    fill    : {
                        type : 'color',
                        color: 'var(--fuse-border)'
                    },
                    width   : 3,
                    stroke  : {
                        dashArray: 0,
                        width    : 0
                    },
                    opacity : 0.9
                },
                tickAmount: 8,
                axisTicks : {
                    show : true,
                    color: 'var(--fuse-border)'
                },
                axisBorder: {
                    show: false
                },
                tooltip   : {
                    enabled: false
                },
                labels    : {
                    show                 : true,
                    trim                 : false,
                    rotate               : 0,
                    minHeight            : 40,
                    hideOverlappingLabels: true,
                    formatter            : (value): string => moment().subtract(Math.abs(parseInt(value, 10)), 'minutes').format('HH:mm'),
                    style                : {
                        colors: 'currentColor'
                    }
                }
            },
            yaxis     : {
                axisTicks     : {
                    show : true,
                    color: 'var(--fuse-border)'
                },
                axisBorder    : {
                    show: false
                },
                forceNiceScale: true,
                labels        : {
                    minWidth : 40,
                    formatter: (value: number): string => '$' + value.toFixed(0),
                    style    : {
                        colors: 'currentColor'
                    }
                }
            }
        };

        // Watchlist options
        this.watchlistChartOptions = {
            chart  : {
                animations: {
                    enabled: false
                },
                width     : '100%',
                height    : '100%',
                type      : 'line',
                sparkline : {
                    enabled: true
                }
            },
            colors : ['#A0AEC0'],
            stroke : {
                width: 2,
                curve: 'smooth'
            },
            tooltip: {
                enabled: false
            },
            xaxis  : {
                type: 'category'
            }
        };
    }
}
