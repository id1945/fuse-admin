import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CryptoService } from 'app/modules/admin/dashboards/crypto/crypto.service';

@Injectable({
    providedIn: 'root'
})
export class CryptoResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _cryptoService: CryptoService)
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
        return this._cryptoService.getData();
    }
}
