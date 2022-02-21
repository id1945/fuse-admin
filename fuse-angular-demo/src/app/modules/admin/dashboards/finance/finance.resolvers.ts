import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FinanceService } from 'app/modules/admin/dashboards/finance/finance.service';

@Injectable({
    providedIn: 'root'
})
export class FinanceResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _financeService: FinanceService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._financeService.getData();
    }
}
