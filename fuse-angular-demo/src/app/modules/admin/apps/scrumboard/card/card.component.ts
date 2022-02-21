import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScrumboardCardDetailsComponent } from 'app/modules/admin/apps/scrumboard/card/details/details.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector       : 'scrumboard-card',
    templateUrl    : './card.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrumboardCardComponent implements OnInit
{
    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _matDialog: MatDialog,
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
        // Launch the modal
        this._matDialog.open(ScrumboardCardDetailsComponent, {autoFocus: false})
            .afterClosed()
            .subscribe(() => {

                // Go up twice because card routes are setup like this; "card/CARD_ID"
                this._router.navigate(['./../..'], {relativeTo: this._activatedRoute});
            });
    }
}
