import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Moment } from 'moment';
import { Calendar, CalendarEvent, CalendarEventEditMode, CalendarSettings, CalendarWeekday } from 'app/modules/admin/apps/calendar/calendar.types';

@Injectable({
    providedIn: 'root'
})
export class CalendarService
{
    // Private
    private _calendars: BehaviorSubject<Calendar[] | null> = new BehaviorSubject(null);
    private _events: BehaviorSubject<CalendarEvent[] | null> = new BehaviorSubject(null);
    private _loadedEventsRange: { start: Moment | null; end: Moment | null } = {
        start: null,
        end  : null
    };
    private readonly _numberOfDaysToPrefetch = 60;
    private _settings: BehaviorSubject<CalendarSettings | null> = new BehaviorSubject(null);
    private _weekdays: BehaviorSubject<CalendarWeekday[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for calendars
     */
    get calendars$(): Observable<Calendar[]>
    {
        return this._calendars.asObservable();
    }

    /**
     * Getter for events
     */
    get events$(): Observable<CalendarEvent[]>
    {
        return this._events.asObservable();
    }

    /**
     * Getter for settings
     */
    get settings$(): Observable<CalendarSettings>
    {
        return this._settings.asObservable();
    }

    /**
     * Getter for weekdays
     */
    get weekdays$(): Observable<CalendarWeekday[]>
    {
        return this._weekdays.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get calendars
     */
    getCalendars(): Observable<Calendar[]>
    {
        return this._httpClient.get<Calendar[]>('api/apps/calendar/calendars').pipe(
            tap((response) => {
                this._calendars.next(response);
            })
        );
    }

    /**
     * Add calendar
     *
     * @param calendar
     */
    addCalendar(calendar: Calendar): Observable<Calendar>
    {
        return this.calendars$.pipe(
            take(1),
            switchMap(calendars => this._httpClient.post<Calendar>('api/apps/calendar/calendars', {
                calendar
            }).pipe(
                map((addedCalendar) => {

                    // Add the calendar
                    calendars.push(addedCalendar);

                    // Update the calendars
                    this._calendars.next(calendars);

                    // Return the added calendar
                    return addedCalendar;
                })
            ))
        );
    }

    /**
     * Update calendar
     *
     * @param id
     * @param calendar
     */
    updateCalendar(id: string, calendar: Calendar): Observable<Calendar>
    {
        return this.calendars$.pipe(
            take(1),
            switchMap(calendars => this._httpClient.patch<Calendar>('api/apps/calendar/calendars', {
                id,
                calendar
            }).pipe(
                map((updatedCalendar) => {

                    // Find the index of the updated calendar
                    const index = calendars.findIndex(item => item.id === id);

                    // Update the calendar
                    calendars[index] = updatedCalendar;

                    // Update the calendars
                    this._calendars.next(calendars);

                    // Return the updated calendar
                    return updatedCalendar;
                })
            ))
        );
    }

    /**
     * Delete calendar
     *
     * @param id
     */
    deleteCalendar(id: string): Observable<any>
    {
        return this.calendars$.pipe(
            take(1),
            switchMap(calendars => this._httpClient.delete<Calendar>('api/apps/calendar/calendars', {
                params: {id}
            }).pipe(
                map((isDeleted) => {

                    // Find the index of the deleted calendar
                    const index = calendars.findIndex(item => item.id === id);

                    // Delete the calendar
                    calendars.splice(index, 1);

                    // Update the calendars
                    this._calendars.next(calendars);

                    // Remove the events belong to deleted calendar
                    const events = this._events.value.filter(event => event.calendarId !== id);

                    // Update the events
                    this._events.next(events);

                    // Return the deleted status
                    return isDeleted;
                })
            ))
        );
    }

    /**
     * Get events
     *
     * @param start
     * @param end
     * @param replace
     */
    getEvents(start: Moment, end: Moment, replace = false): Observable<CalendarEvent[]>
    {
        // Set the new start date for loaded events
        if ( replace || !this._loadedEventsRange.start || start.isBefore(this._loadedEventsRange.start) )
        {
            this._loadedEventsRange.start = start;
        }

        // Set the new end date for loaded events
        if ( replace || !this._loadedEventsRange.end || end.isAfter(this._loadedEventsRange.end) )
        {
            this._loadedEventsRange.end = end;
        }

        // Get the events
        return this._httpClient.get<CalendarEvent[]>('api/apps/calendar/events', {
            params: {
                start: start.toISOString(true),
                end  : end.toISOString(true)
            }
        }).pipe(
            switchMap(response => this._events.pipe(
                take(1),
                map((events) => {

                    // If replace...
                    if ( replace )
                    {
                        // Execute the observable with the response replacing the events object
                        this._events.next(response);
                    }
                    // Otherwise...
                    else
                    {
                        // If events is null, replace it with an empty array
                        events = events || [];

                        // Execute the observable by appending the response to the current events
                        this._events.next([...events, ...response]);
                    }

                    // Return the response
                    return response;
                })
            ))
        );
    }

    /**
     * Reload events using the loaded events range
     */
    reloadEvents(): Observable<CalendarEvent[]>
    {
        // Get the events
        return this._httpClient.get<CalendarEvent[]>('api/apps/calendar/events', {
            params: {
                start: this._loadedEventsRange.start.toISOString(),
                end  : this._loadedEventsRange.end.toISOString()
            }
        }).pipe(
            map((response) => {

                // Execute the observable with the response replacing the events object
                this._events.next(response);

                // Return the response
                return response;
            })
        );
    }

    /**
     * Prefetch future events
     *
     * @param end
     */
    prefetchFutureEvents(end: Moment): Observable<CalendarEvent[]>
    {
        // Calculate the remaining prefetched days
        const remainingDays = this._loadedEventsRange.end.diff(end, 'days');

        // Return if remaining days is bigger than the number
        // of days to prefetch. This means we were already been
        // there and fetched the events data so no need for doing
        // it again.
        if ( remainingDays >= this._numberOfDaysToPrefetch )
        {
            return of([]);
        }

        // Figure out the start and end dates
        const start = this._loadedEventsRange.end.clone().add(1, 'day');
        end = this._loadedEventsRange.end.clone().add(this._numberOfDaysToPrefetch - remainingDays, 'days');

        // Prefetch the events
        return this.getEvents(start, end);
    }

    /**
     * Prefetch past events
     *
     * @param start
     */
    prefetchPastEvents(start: Moment): Observable<CalendarEvent[]>
    {
        // Calculate the remaining prefetched days
        const remainingDays = start.diff(this._loadedEventsRange.start, 'days');

        // Return if remaining days is bigger than the number
        // of days to prefetch. This means we were already been
        // there and fetched the events data so no need for doing
        // it again.
        if ( remainingDays >= this._numberOfDaysToPrefetch )
        {
            return of([]);
        }

        // Figure out the start and end dates
        start = this._loadedEventsRange.start.clone().subtract(this._numberOfDaysToPrefetch - remainingDays, 'days');
        const end = this._loadedEventsRange.start.clone().subtract(1, 'day');

        // Prefetch the events
        return this.getEvents(start, end);
    }

    /**
     * Add event
     *
     * @param event
     */
    addEvent(event): Observable<CalendarEvent>
    {
        return this.events$.pipe(
            take(1),
            switchMap(events => this._httpClient.post<CalendarEvent>('api/apps/calendar/event', {
                event
            }).pipe(
                map((addedEvent) => {

                    // Update the events
                    this._events.next(events);

                    // Return the added event
                    return addedEvent;
                })
            ))
        );
    }

    /**
     * Update event
     *
     * @param id
     * @param event
     */
    updateEvent(id: string, event): Observable<CalendarEvent>
    {
        return this.events$.pipe(
            take(1),
            switchMap(events => this._httpClient.patch<CalendarEvent>('api/apps/calendar/event', {
                id,
                event
            }).pipe(
                map((updatedEvent) => {

                    // Find the index of the updated event
                    const index = events.findIndex(item => item.id === id);

                    // Update the event
                    events[index] = updatedEvent;

                    // Update the events
                    this._events.next(events);

                    // Return the updated event
                    return updatedEvent;
                })
            ))
        );
    }

    /**
     * Update recurring event
     *
     * @param event
     * @param originalEvent
     * @param mode
     */
    updateRecurringEvent(event, originalEvent, mode: CalendarEventEditMode): Observable<boolean>
    {
        return this._httpClient.patch<boolean>('api/apps/calendar/recurring-event', {
            event,
            originalEvent,
            mode
        });
    }

    /**
     * Delete event
     *
     * @param id
     */
    deleteEvent(id: string): Observable<CalendarEvent>
    {
        return this.events$.pipe(
            take(1),
            switchMap(events => this._httpClient.delete<CalendarEvent>('api/apps/calendar/event', {params: {id}}).pipe(
                map((isDeleted) => {

                    // Find the index of the deleted event
                    const index = events.findIndex(item => item.id === id);

                    // Delete the event
                    events.splice(index, 1);

                    // Update the events
                    this._events.next(events);

                    // Return the deleted status
                    return isDeleted;
                })
            ))
        );
    }

    /**
     * Delete recurring event
     *
     * @param event
     * @param mode
     */
    deleteRecurringEvent(event, mode: CalendarEventEditMode): Observable<boolean>
    {
        return this._httpClient.delete<boolean>('api/apps/calendar/recurring-event', {
            params: {
                event: JSON.stringify(event),
                mode
            }
        });
    }

    /**
     * Get settings
     */
    getSettings(): Observable<CalendarSettings>
    {
        return this._httpClient.get<CalendarSettings>('api/apps/calendar/settings').pipe(
            tap((response) => {
                this._settings.next(response);
            })
        );
    }

    /**
     * Update settings
     */
    updateSettings(settings: CalendarSettings): Observable<CalendarSettings>
    {
        return this.events$.pipe(
            take(1),
            switchMap(events => this._httpClient.patch<CalendarSettings>('api/apps/calendar/settings', {
                settings
            }).pipe(
                map((updatedSettings) => {

                    // Update the settings
                    this._settings.next(settings);

                    // Get weekdays again to get them in correct order
                    // in case the startWeekOn setting changes
                    this.getWeekdays().subscribe();

                    // Return the updated settings
                    return updatedSettings;
                })
            ))
        );
    }

    /**
     * Get weekdays
     */
    getWeekdays(): Observable<CalendarWeekday[]>
    {
        return this._httpClient.get<CalendarWeekday[]>('api/apps/calendar/weekdays').pipe(
            tap((response) => {
                this._weekdays.next(response);
            })
        );
    }
}
