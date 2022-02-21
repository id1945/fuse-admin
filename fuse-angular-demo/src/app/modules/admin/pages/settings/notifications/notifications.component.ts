import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector       : 'settings-notifications',
    templateUrl    : './notifications.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsNotificationsComponent implements OnInit
{
    notificationsForm: FormGroup;

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: FormBuilder
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
        // Create the form
        this.notificationsForm = this._formBuilder.group({
            communication: [true],
            security     : [true],
            meetups      : [false],
            comments     : [false],
            mention      : [true],
            follow       : [true],
            inquiry      : [true]
        });
    }
}
