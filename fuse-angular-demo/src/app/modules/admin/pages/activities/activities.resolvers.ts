import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivitiesService } from 'app/modules/admin/pages/activities/activities.service';

@Injectable({
    providedIn: 'root'
})
export class ActivitiesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _activityService: ActivitiesService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolve
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._activityService.getActivities();
    }
}
