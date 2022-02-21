import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector     : 'coming-soon-classic',
    templateUrl  : './coming-soon.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ComingSoonModernReversedComponent implements OnInit
{
    @ViewChild('comingSoonNgForm') comingSoonNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    comingSoonForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
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
        this.comingSoonForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    register(): void
    {
        // Return if the form is invalid
        if ( this.comingSoonForm.invalid )
        {
            return;
        }

        // Disable the form
        this.comingSoonForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Do your action here...
        // Emulate server delay
        setTimeout(() => {

            // Re-enable the form
            this.comingSoonForm.enable();

            // Reset the form
            this.comingSoonNgForm.resetForm();

            // Set the alert
            this.alert = {
                type   : 'success',
                message: 'You have been registered to the list.'
            };

        }, 1000);
    }
}
