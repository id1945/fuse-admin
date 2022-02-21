import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[fuseScrollReset]',
    exportAs: 'fuseScrollReset'
})
export class FuseScrollResetDirective implements OnInit, OnDestroy
{
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _elementRef: ElementRef,
        private _router: Router
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
        // Subscribe to NavigationEnd event
        this._router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Reset the element's scroll position to the top
            this._elementRef.nativeElement.scrollTop = 0;
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
