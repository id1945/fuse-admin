import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import { filters as filtersData, folders as foldersData, labels as labelsData, mails as mailsData, settings as settingsData } from 'app/mock-api/apps/mailbox/data';

@Injectable({
    providedIn: 'root'
})
export class MailboxMockApi
{
    private _filters: any[] = filtersData;
    private _folders: any[] = foldersData;
    private _mails: any[] = mailsData;
    private _labels: any[] = labelsData;
    private _settings: any = settingsData;

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
        // @ Settings - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/mailbox/settings')
            .reply(() => [200, cloneDeep(this._settings)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Settings - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/mailbox/settings')
            .reply(({request}) => {

                // Get the settings
                const settings = cloneDeep(request.body.settings);

                // Update the settings
                this._settings = assign({}, this._settings, settings);

                // Return the response
                return [200, cloneDeep(this._settings)];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Folders - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/mailbox/folders')
            .reply(() => {

                let count = 0;

                // Iterate through the folders
                this._folders.forEach((folder) => {

                    // Get the mails of this folder
                    const mails = this._mails.filter(mail => mail.folder === folder.id);

                    // If we are counting the 'sent' or the 'trash' folder...
                    if ( folder.slug === 'sent' || folder.slug === 'trash' )
                    {
                        // Always set the count to 0
                        count = 0;
                    }
                    // If we are counting the 'drafts' or the 'spam' folder...
                    else if ( folder.slug === 'drafts' || folder.slug === 'trash' || folder.slug === 'spam' )
                    {
                        // Set the count to the count of all mails
                        count = mails.length;
                    }
                    // Otherwise ('inbox')...
                    else
                    {
                        // Go through the mails and count the unread ones
                        mails.forEach((mail) => {

                            if ( mail.unread )
                            {
                                count++;
                            }
                        });
                    }

                    // Append the count to the folder mock-api
                    folder.count = count;

                    // Reset the count
                    count = 0;
                });

                // Return the response
                return [200, cloneDeep(this._folders)];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Filters - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/mailbox/filters')
            .reply(() => [200, cloneDeep(this._filters)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Labels - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/mailbox/labels')
            .reply(() => [200, cloneDeep(this._labels)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Labels - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/apps/mailbox/label')
            .reply(({request}) => {

                // Get the label
                const label = cloneDeep(request.body.label);

                // Generate an id
                label.id = FuseMockApiUtils.guid();

                // Generate a slug
                label.slug = label.title.toLowerCase()
                                  .replace(/ /g, '-')
                                  .replace(/[-]+/g, '-')
                                  .replace(/[^\w-]+/g, '');

                // Check if the slug is being used and update it if necessary
                const originalSlug = label.slug;

                let sameSlug;
                let slugSuffix = 1;

                do
                {
                    sameSlug = this._labels.filter(item => item.slug === label.slug);

                    if ( sameSlug.length > 0 )
                    {
                        label.slug = originalSlug + '-' + slugSuffix;
                        slugSuffix++;
                    }
                }
                while ( sameSlug.length > 0 );

                // Add the label
                this._labels.push(label);

                // Return the response
                return [200, label];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Labels - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/mailbox/label')
            .reply(({request}) => {

                // Get the id and label
                const id = request.body.id;
                const label = cloneDeep(request.body.label);

                // Prepare the updated label
                let updatedLabel = null;

                // Find the label and update it
                this._labels.forEach((item, index, labels) => {

                    if ( item.id === id )
                    {
                        // Update the slug
                        label.slug = label.title.toLowerCase()
                                          .replace(/ /g, '-')
                                          .replace(/[-]+/g, '-')
                                          .replace(/[^\w-]+/g, '');

                        // Update the label
                        labels[index] = assign({}, labels[index], label);

                        // Store the updated label
                        updatedLabel = labels[index];
                    }
                });

                // Return the response
                return [200, updatedLabel];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Labels - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onDelete('api/apps/mailbox/label')
            .reply(({request}) => {

                // Get the id
                const id = request.params.get('id');

                // Find the label and delete it
                const index = this._labels.findIndex(item => item.id === id);
                this._labels.splice(index, 1);

                // Get all the mails that have the label
                const mailsWithLabel = this._mails.filter(mail => mail.labels.indexOf(id) > -1);

                // Iterate through them and remove the label
                mailsWithLabel.forEach((mail) => {
                    mail.labels.splice(mail.labels.indexOf(id), 1);
                });

                // Return the response
                return [200, true];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Mails - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/mailbox/mails', 625)
            .reply(({request}) => {

                // First, decide if mails are requested by folder, filter or label
                const byFolder = request.params.get('folder');
                const byFilter = request.params.get('filter');
                const byLabel = request.params.get('label');

                // Clone the mails mock-api to prevent accidental mock-api updates
                let mails: any[] | null = cloneDeep(this._mails);

                // Filter the mails depending on the requested by type
                mails = mails.filter((mail) => {

                    if ( byFolder )
                    {
                        return mail.folder === this._folders.find(folder => folder.slug === byFolder).id;
                    }

                    if ( byFilter )
                    {
                        return mail[byFilter] === true;
                    }

                    if ( byLabel )
                    {
                        return mail.labels.includes(this._labels.find(label => label.slug === byLabel).id);
                    }
                });

                // Sort by date - descending
                mails.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

                // Figure out the cc and bcc counts
                mails.forEach((mail) => {
                    mail.ccCount = mail.cc ? mail.cc.length : 0;
                    mail.bccCount = mail.bcc ? mail.bcc.length : 0;
                });

                // Paginate - Start
                const mailsLength = mails.length;
                const resultsPerPage = 10;

                // Get the requested page number
                const page = parseInt(request.params.get('page') ?? '1', 10);

                // Calculate pagination details
                const begin = (page - 1) * resultsPerPage;
                const end = Math.min((resultsPerPage * page), mailsLength);
                const lastPage = Math.max(Math.ceil(mailsLength / resultsPerPage), 1);

                // Prepare the pagination object
                let pagination = {};

                // If the requested page number is bigger than
                // the last possible page number, return null for
                // mails but also send the last possible page so
                // the app can navigate to there
                if ( page > lastPage )
                {
                    mails = null;
                    pagination = {
                        lastPage
                    };
                }
                else
                {
                    // Paginate the results by 10
                    mails = mails.slice(begin, end);

                    // Prepare the pagination mock-api
                    pagination = {
                        totalResults  : mailsLength,
                        resultsPerPage: resultsPerPage,
                        currentPage   : page,
                        lastPage      : lastPage,
                        startIndex    : begin,
                        endIndex      : end - 1
                    };
                }

                // Return the response
                return [
                    200,
                    {
                        mails,
                        pagination
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Mail - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/mailbox/mail')
            .reply(({request}) => {

                // Get the id from the params
                const id = request.params.get('id');

                // Clone the mails mock-api to prevent accidental mock-api updates
                const mails = cloneDeep(this._mails);

                // Find the mail
                const mail = mails.find(item => item.id === id);

                return [
                    200,
                    mail
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Mail - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/mailbox/mail')
            .reply(({request}) => {

                // Get the id and mail
                const id = request.body.id;
                const mail = cloneDeep(request.body.mail);

                // Prepare the updated mail
                let updatedMail = null;

                // Find the mail and update it
                this._mails.forEach((item, index, mails) => {

                    if ( item.id === id )
                    {
                        // Update the mail
                        mails[index] = assign({}, mails[index], mail);

                        // Store the updated mail
                        updatedMail = mails[index];
                    }
                });

                // Return the response
                return [200, updatedMail];
            });
    }
}
