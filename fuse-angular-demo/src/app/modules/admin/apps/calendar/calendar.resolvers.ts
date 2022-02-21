import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CalendarService } from 'app/modules/admin/apps/calendar/calendar.service';
import { Calendar, CalendarSettings, CalendarWeekday } from 'app/modules/admin/apps/calendar/calendar.types';

@Injectable({
    providedIn: 'root'
})
export class CalendarCalendarsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _calendarService: CalendarService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Calendar[]>
    {
        return this._calendarService.getCalendars();
    }
}

@Injectable({
    providedIn: 'root'
})
export class CalendarSettingsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _calendarService: CalendarService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CalendarSettings>
    {
        return this._calendarService.getSettings();
    }
}

@Injectable({
    providedIn: 'root'
})
export class CalendarWeekdaysResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _calendarService: CalendarService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CalendarWeekday[]>
    {
        return this._calendarService.getWeekdays();
    }
}
