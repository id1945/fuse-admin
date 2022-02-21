import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class IconsService
{
    // Private
    private _icons: BehaviorSubject<any> = new BehaviorSubject(null);

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
     * Getter for icons
     */
    get icons(): Observable<any>
    {
        return this._icons.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get icons
     *
     * @param url
     */
    getIcons(url: string): Observable<any>
    {
        // Prepend the url with 'api'
        url = 'api' + url;

        return this._httpClient.get(url).pipe(
            tap((response: any) => {
                this._icons.next(response);
            })
        );
    }
}
