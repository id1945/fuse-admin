import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContactsService } from 'app/modules/admin/apps/contacts/contacts.service';
import { Contact, Country, Tag } from 'app/modules/admin/apps/contacts/contacts.types';

@Injectable({
    providedIn: 'root'
})
export class ContactsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _contactsService: ContactsService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact[]>
    {
        return this._contactsService.getContacts();
    }
}

@Injectable({
    providedIn: 'root'
})
export class ContactsContactResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _contactsService: ContactsService,
        private _router: Router
    )
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact>
    {
        return this._contactsService.getContactById(route.paramMap.get('id'))
                   .pipe(
                       // Error here means the requested contact is not available
                       catchError((error) => {

                           // Log the error
                           console.error(error);

                           // Get the parent url
                           const parentUrl = state.url.split('/').slice(0, -1).join('/');

                           // Navigate to there
                           this._router.navigateByUrl(parentUrl);

                           // Throw an error
                           return throwError(error);
                       })
                   );
    }
}

@Injectable({
    providedIn: 'root'
})
export class ContactsCountriesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _contactsService: ContactsService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country[]>
    {
        return this._contactsService.getCountries();
    }
}

@Injectable({
    providedIn: 'root'
})
export class ContactsTagsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _contactsService: ContactsService)
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tag[]>
    {
        return this._contactsService.getTags();
    }
}
