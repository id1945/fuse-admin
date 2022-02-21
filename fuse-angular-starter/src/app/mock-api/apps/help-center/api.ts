import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { faqCategories as faqCategoriesData, faqs as faqsData, guideCategories as guideCategoriesData, guideContent as guideContentData, guides as guidesData } from 'app/mock-api/apps/help-center/data';

@Injectable({
    providedIn: 'root'
})
export class HelpCenterMockApi
{
    private _faqCategories: any[] = faqCategoriesData;
    private _faqs: any[] = faqsData;
    private _guideCategories: any[] = guideCategoriesData;
    private _guides: any[] = guidesData;
    private _guideContent: string = guideContentData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ FAQs - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/help-center/faqs')
            .reply(({request}) => {

                // Get the category slug
                const slug = request.params.get('slug');

                // Prepare the results
                const results = [];

                // Get FAQs
                const faqs = cloneDeep(this._faqs);

                // Get FAQ Categories
                const categories = cloneDeep(this._faqCategories);

                // If slug is not provided...
                if ( !slug )
                {
                    // Go through each category and set the results
                    categories.forEach((category) => {

                        results.push(
                            {
                                ...category,
                                faqs: faqs.filter(faq => faq.categoryId === category.id)
                            }
                        );
                    });
                }
                // Otherwise...
                else
                {
                    // Find the category by the slug
                    const category = categories.find(item => item.slug === slug);

                    // Set the results
                    results.push(
                        {
                            ...category,
                            faqs: faqs.filter(faq => faq.categoryId === category.id)
                        }
                    );
                }

                // Return the response
                return [200, results];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Guides - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/help-center/guides')
            .reply(({request}) => {

                // Get the slug & limit
                const slug = request.params.get('slug');
                const limit = request.params.get('limit');

                // Prepare the results
                const results = [];

                // Get all Guides
                const guides = cloneDeep(this._guides);

                // Get Guide categories
                const categories = cloneDeep(this._guideCategories);

                // If slug is not provided...
                if ( !slug )
                {
                    // Parse the limit as an integer
                    const limitNum = parseInt(limit ?? '5', 10);

                    // Go through each category and set the results
                    categories.forEach((category) => {

                        results.push(
                            {
                                ...category,
                                visibleGuides: limitNum,
                                totalGuides  : guides.filter(guide => guide.categoryId === category.id).length,
                                guides       : guides.filter(guide => guide.categoryId === category.id).slice(0, limitNum)
                            }
                        );
                    });
                }
                // Otherwise...
                else
                {
                    // Find the category by the slug
                    const category = categories.find(item => item.slug === slug);

                    // Set the results
                    results.push(
                        {
                            ...category,
                            guides: guides.filter(guide => guide.categoryId === category.id)
                        }
                    );
                }

                // Return the response
                return [200, results];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Guide - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/help-center/guide')
            .reply(({request}) => {

                // Get the slugs
                const categorySlug = request.params.get('categorySlug');
                const guideSlug = request.params.get('guideSlug');

                // Get all Guides and Guide Categories
                const guides = cloneDeep(this._guides);
                const categories = cloneDeep(this._guideCategories);

                // Prepare the result
                const result = {
                    ...categories.find(category => category.slug === categorySlug),
                    guides: [guides.find(guide => guide.slug === guideSlug)]
                };

                // Add the content to the guide
                result.guides[0]['content'] = this._guideContent;

                // Return the response
                return [200, result];
            });
    }
}
