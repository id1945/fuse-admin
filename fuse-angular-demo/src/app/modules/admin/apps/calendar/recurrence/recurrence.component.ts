import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CalendarService } from 'app/modules/admin/apps/calendar/calendar.service';
import { CalendarWeekday } from 'app/modules/admin/apps/calendar/calendar.types';

@Component({
    selector     : 'calendar-recurrence',
    templateUrl  : './recurrence.component.html',
    encapsulation: ViewEncapsulation.None
})
export class CalendarRecurrenceComponent implements OnInit, OnDestroy
{
    nthWeekdayText: string;
    recurrenceForm: FormGroup;
    recurrenceFormValues: any;
    weekdays: CalendarWeekday[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public matDialogRef: MatDialogRef<CalendarRecurrenceComponent>,
        private _calendarService: CalendarService,
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
        // Get weekdays
        this._calendarService.weekdays$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((weekdays) => {

                // Store the weekdays
                this.weekdays = weekdays;
            });

        // Initialize
        this._init();

        // Create the recurrence form
        this.recurrenceForm = this._formBuilder.group({
            freq    : [null],
            interval: [null, Validators.required],
            weekly  : this._formBuilder.group({
                byDay: [[]]
            }),
            monthly : this._formBuilder.group({
                repeatOn  : [null], // date | nthWeekday
                date      : [null],
                nthWeekday: [null]
            }),
            end     : this._formBuilder.group({
                type : [null], // never | until | count
                until: [null],
                count: [null]
            })
        });

        // Subscribe to 'freq' field value changes
        this.recurrenceForm.get('freq').valueChanges.subscribe((value) => {

            // Set the end values
            this._setEndValues(value);
        });

        // Subscribe to 'weekly.byDay' field value changes
        this.recurrenceForm.get('weekly.byDay').valueChanges.subscribe((value) => {

            // Get the event's start date
            const startDate = moment(this.data.event.start);

            // If nothing is selected, select the original value from
            // the event form to prevent an empty value on the field
            if ( !value || !value.length )
            {
                // Get the day of event start date
                const eventStartDay = startDate.format('dd').toUpperCase();

                // Set the original value back without emitting a
                // change event to prevent an infinite loop
                this.recurrenceForm.get('weekly.byDay').setValue([eventStartDay], {emitEvent: false});
            }
        });

        // Patch the form with the values
        this.recurrenceForm.patchValue(this.recurrenceFormValues);

        // Set end values for the first time
        this._setEndValues(this.recurrenceForm.get('freq').value);
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
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Clear
     */
    clear(): void
    {
        // Close the dialog
        this.matDialogRef.close({recurrence: 'cleared'});
    }

    /**
     * Done
     */
    done(): void
    {
        // Get the recurrence form values
        const recurrenceForm = this.recurrenceForm.value;

        // Prepare the rule array and add the base rules
        const ruleArr = ['FREQ=' + recurrenceForm.freq, 'INTERVAL=' + recurrenceForm.interval];

        // If monthly on certain days...
        if ( recurrenceForm.freq === 'MONTHLY' && recurrenceForm.monthly.repeatOn === 'nthWeekday' )
        {
            ruleArr.push('BYDAY=' + recurrenceForm.monthly.nthWeekday);
        }

        // If weekly...
        if ( recurrenceForm.freq === 'WEEKLY' )
        {
            // If byDay is an array...
            if ( Array.isArray(recurrenceForm.weekly.byDay) )
            {
                ruleArr.push('BYDAY=' + recurrenceForm.weekly.byDay.join(','));
            }
            // Otherwise
            else
            {
                ruleArr.push('BYDAY=' + recurrenceForm.weekly.byDay);
            }
        }

        // If one of the end options is selected...
        if ( recurrenceForm.end.type === 'until' )
        {
            ruleArr.push('UNTIL=' + moment(recurrenceForm.end.until).endOf('day').utc().format('YYYYMMDD[T]HHmmss[Z]'));
        }

        if ( recurrenceForm.end.type === 'count' )
        {
            ruleArr.push('COUNT=' + recurrenceForm.end.count);
        }

        // Generate rule text
        const ruleText = ruleArr.join(';');

        // Close the dialog
        this.matDialogRef.close({recurrence: ruleText});
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @private
     */
    private _init(): void
    {
        // Get the event's start date
        const startDate = moment(this.data.event.start);

        // Calculate the weekday
        const weekday = moment(this.data.event.start).format('dd').toUpperCase();

        // Calculate the nthWeekday
        let nthWeekdayNo = 1;
        while ( startDate.clone().isSame(startDate.clone().subtract(nthWeekdayNo, 'week'), 'month') )
        {
            nthWeekdayNo++;
        }
        const nthWeekday = nthWeekdayNo + weekday;

        // Calculate the nthWeekday as text
        const ordinalNumberSuffixes = {
            1: 'st',
            2: 'nd',
            3: 'rd',
            4: 'th',
            5: 'th'
        };
        this.nthWeekdayText = nthWeekday.slice(0, 1) + ordinalNumberSuffixes[nthWeekday.slice(0, 1)] + ' ' +
            this.weekdays.find(item => item.value === nthWeekday.slice(-2)).label;

        // Set the defaults on recurrence form values
        this.recurrenceFormValues = {
            freq    : 'DAILY',
            interval: 1,
            weekly  : {
                byDay: weekday
            },
            monthly : {
                repeatOn  : 'date',
                date      : moment(this.data.event.start).date(),
                nthWeekday: nthWeekday
            },
            end     : {
                type : 'never',
                until: null,
                count: null
            }
        };

        // If recurrence rule string is available on the
        // event meaning that the is a recurring one...
        if ( this.data.event.recurrence )
        {
            // Parse the rules
            const parsedRules: any = {};
            this.data.event.recurrence.split(';').forEach((rule) => {
                parsedRules[rule.split('=')[0]] = rule.split('=')[1];
            });

            // Overwrite the recurrence form values
            this.recurrenceFormValues.freq = parsedRules.FREQ;
            this.recurrenceFormValues.interval = parsedRules.INTERVAL;

            if ( parsedRules.FREQ === 'WEEKLY' )
            {
                this.recurrenceFormValues.weekly.byDay = parsedRules.BYDAY.split(',');
            }

            if ( parsedRules.FREQ === 'MONTHLY' )
            {
                this.recurrenceFormValues.monthly.repeatOn = parsedRules.BYDAY ? 'nthWeekday' : 'date';
            }

            this.recurrenceFormValues.end.type = parsedRules.UNTIL ? 'until' : (parsedRules.COUNT ? 'count' : 'never');
            this.recurrenceFormValues.end.until = parsedRules.UNTIL || null;
            this.recurrenceFormValues.end.count = parsedRules.COUNT || null;
        }
    }

    /**
     * Set the end value based on frequency
     *
     * @param freq
     * @private
     */
    private _setEndValues(freq: string): void
    {
        // Return if freq is not available
        if ( !freq )
        {
            return;
        }

        // Get the event's start date
        const startDate = moment(this.data.event.startDate);

        // Get the end type
        const endType = this.recurrenceForm.get('end.type').value;

        // If until is not selected
        if ( endType !== 'until' )
        {
            let until;

            // Change the until's default value based on the frequency
            if ( freq === 'DAILY' )
            {
                until = startDate.clone().add(1, 'month').toISOString();
            }

            if ( freq === 'WEEKLY' )
            {
                until = startDate.clone().add(12, 'weeks').toISOString();
            }

            if ( freq === 'MONTHLY' )
            {
                until = startDate.clone().add(12, 'months').toISOString();
            }

            if ( freq === 'YEARLY' )
            {
                until = startDate.clone().add(5, 'years').toISOString();
            }

            // Set the until
            this.recurrenceForm.get('end.until').setValue(until);
        }

        // If count is not selected...
        if ( endType !== 'count' )
        {
            let count;

            // Change the count's default value based on the frequency
            if ( freq === 'DAILY' )
            {
                count = 30;
            }

            if ( freq === 'WEEKLY' || freq === 'MONTHLY' )
            {
                count = 12;
            }

            if ( freq === 'YEARLY' )
            {
                count = 5;
            }

            // Set the count
            this.recurrenceForm.get('end.count').setValue(count);
        }
    }
}
