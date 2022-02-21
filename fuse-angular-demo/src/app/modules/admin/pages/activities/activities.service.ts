import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Activity } from 'app/modules/admin/pages/activities/activities.types';

@Injectable({
    providedIn: 'root'
})
export class ActivitiesService
{
    // Private
    private _activities: BehaviorSubject<any> = new BehaviorSubject(null);

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
     * Getter for activities
     */
    get activities(): Observable<any>
    {
        return this._activities.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get activities
     */
    getActivities(): Observable<any>
    {
        return this._httpClient.get<Activity[]>('api/pages/activities').pipe(
            tap((response: Activity[]) => {
                this._activities.next(response);
            })
        );
    }
}
