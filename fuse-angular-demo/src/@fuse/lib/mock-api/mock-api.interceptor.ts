import { Inject, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { FUSE_MOCK_API_DEFAULT_DELAY } from '@fuse/lib/mock-api/mock-api.constants';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';

@Injectable({
    providedIn: 'root'
})
export class FuseMockApiInterceptor implements HttpInterceptor
{
    /**
     * Constructor
     */
    constructor(
        @Inject(FUSE_MOCK_API_DEFAULT_DELAY) private _defaultDelay: number,
        private _fuseMockApiService: FuseMockApiService
    )
    {
    }

    /**
     * Intercept
     *
     * @param request
     * @param next
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        // Try to get the request handler
        const {
                  handler,
                  urlParams
              } = this._fuseMockApiService.findHandler(request.method.toUpperCase(), request.url);

        // Pass through if the request handler does not exist
        if ( !handler )
        {
            return next.handle(request);
        }

        // Set the intercepted request on the handler
        handler.request = request;

        // Set the url params on the handler
        handler.urlParams = urlParams;

        // Subscribe to the response function observable
        return handler.response.pipe(
            delay(handler.delay ?? this._defaultDelay ?? 0),
            switchMap((response) => {

                // If there is no response data,
                // throw an error response
                if ( !response )
                {
                    response = new HttpErrorResponse({
                        error     : 'NOT FOUND',
                        status    : 404,
                        statusText: 'NOT FOUND'
                    });

                    return throwError(response);
                }

                // Parse the response data
                const data = {
                    status: response[0],
                    body  : response[1]
                };

                // If the status code is in between 200 and 300,
                // return a success response
                if ( data.status >= 200 && data.status < 300 )
                {
                    response = new HttpResponse({
                        body      : data.body,
                        status    : data.status,
                        statusText: 'OK'
                    });

                    return of(response);
                }

                // For other status codes,
                // throw an error response
                response = new HttpErrorResponse({
                    error     : data.body.error,
                    status    : data.status,
                    statusText: 'ERROR'
                });

                return throwError(response);
            }));
    }
}
