import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector       : 'scrumboard-board-add-card',
    templateUrl    : './add-card.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrumboardBoardAddCardComponent implements OnInit
{
    @ViewChild('titleInput') titleInput: ElementRef;
    @ViewChild('titleAutosize') titleAutosize: CdkTextareaAutosize;
    @Input() buttonTitle: string = 'Add a card';
    @Output() readonly saved: EventEmitter<string> = new EventEmitter<string>();

    form: FormGroup;
    formVisible: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
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
        // Initialize the new list form
        this.form = this._formBuilder.group({
            title: ['']
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Save
     */
    save(): void
    {
        // Get the new list title
        const title = this.form.get('title').value;

        // Return, if the title is empty
        if ( !title || title.trim() === '' )
        {
            return;
        }

        // Execute the observable
        this.saved.next(title.trim());

        // Clear the new list title and hide the form
        this.formVisible = false;
        this.form.get('title').setValue('');

        // Reset the size of the textarea
        setTimeout(() => {
            this.titleInput.nativeElement.value = '';
            this.titleAutosize.reset();
        });

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Toggle the visibility of the form
     */
    toggleFormVisibility(): void
    {
        // Toggle the visibility
        this.formVisible = !this.formVisible;

        // If the form becomes visible, focus on the title field
        if ( this.formVisible )
        {
            this.titleInput.nativeElement.focus();
        }
    }
}
