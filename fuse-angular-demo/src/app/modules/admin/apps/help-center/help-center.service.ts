import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FaqCategory, Guide, GuideCategory } from 'app/modules/admin/apps/help-center/help-center.type';

@Injectable({
    providedIn: 'root'
})
export class HelpCenterService
{
    private _faqs: ReplaySubject<FaqCategory[]> = new ReplaySubject<FaqCategory[]>(1);
    private _guides: ReplaySubject<GuideCategory[]> = new ReplaySubject<GuideCategory[]>(1);
    private _guide: ReplaySubject<Guide> = new ReplaySubject<Guide>(1);

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
     * Getter for FAQs
     */
    get faqs$(): Observable<FaqCategory[]>
    {
        return this._faqs.asObservable();
    }

    /**
     * Getter for guides
     */
    get guides$(): Observable<GuideCategory[]>
    {
        return this._guides.asObservable();
    }

    /**
     * Getter for guide
     */
    get guide$(): Observable<GuideCategory>
    {
        return this._guide.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all FAQs
     */
    getAllFaqs(): Observable<FaqCategory[]>
    {
        return this._httpClient.get<FaqCategory[]>('api/apps/help-center/faqs').pipe(
            tap((response: any) => {
                this._faqs.next(response);
            })
        );
    }

    /**
     * Get FAQs by category using category slug
     *
     * @param slug
     */
    getFaqsByCategory(slug: string): Observable<FaqCategory[]>
    {
        return this._httpClient.get<FaqCategory[]>('api/apps/help-center/faqs', {
            params: {slug}
        }).pipe(
            tap((response: any) => {
                this._faqs.next(response);
            })
        );
    }

    /**
     * Get all guides limited per category by the given number
     *
     * @param limit
     */
    getAllGuides(limit = '4'): Observable<GuideCategory[]>
    {
        return this._httpClient.get<GuideCategory[]>('api/apps/help-center/guides', {
            params: {limit}
        }).pipe(
            tap((response: any) => {
                this._guides.next(response);
            })
        );
    }

    /**
     * Get guides by category using category slug
     *
     * @param slug
     */
    getGuidesByCategory(slug: string): Observable<GuideCategory[]>
    {
        return this._httpClient.get<GuideCategory[]>('api/apps/help-center/guides', {
            params: {slug}
        }).pipe(
            tap((response: any) => {
                this._guides.next(response);
            })
        );
    }

    /**
     * Get guide by category and guide slug
     *
     * @param categorySlug
     * @param guideSlug
     */
    getGuide(categorySlug: string, guideSlug: string): Observable<GuideCategory>
    {
        return this._httpClient.get<GuideCategory>('api/apps/help-center/guide', {
            params: {
                categorySlug,
                guideSlug
            }
        }).pipe(
            tap((response: any) => {
                this._guide.next(response);
            })
        );
    }
}
