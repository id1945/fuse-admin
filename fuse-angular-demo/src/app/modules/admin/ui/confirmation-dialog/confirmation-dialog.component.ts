import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FuseConfirmationService } from '@fuse/services/confirmation';

@Component({
    selector       : 'confirmation',
    templateUrl    : './confirmation-dialog.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationDialogComponent implements OnInit
{
    configForm: FormGroup;

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: FormBuilder,
        private _fuseConfirmationService: FuseConfirmationService
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
        // Build the config form
        this.configForm = this._formBuilder.group({
            title      : 'Remove contact',
            message    : 'Are you sure you want to remove this contact permanently? <span class="font-medium">This action cannot be undone!</span>',
            icon       : this._formBuilder.group({
                show : true,
                name : 'heroicons_outline:exclamation',
                color: 'warn'
            }),
            actions    : this._formBuilder.group({
                confirm: this._formBuilder.group({
                    show : true,
                    label: 'Remove',
                    color: 'warn'
                }),
                cancel : this._formBuilder.group({
                    show : true,
                    label: 'Cancel'
                })
            }),
            dismissible: true
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open confirmation dialog
     */
    openConfirmationDialog(): void
    {
        // Open the dialog and save the reference of it
        const dialogRef = this._fuseConfirmationService.open(this.configForm.value);

        // Subscribe to afterClosed from the dialog reference
        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
    }
}
