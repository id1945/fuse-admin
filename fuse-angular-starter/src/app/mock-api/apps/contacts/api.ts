import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import { contacts as contactsData, countries as countriesData, tags as tagsData } from 'app/mock-api/apps/contacts/data';

@Injectable({
    providedIn: 'root'
})
export class ContactsMockApi
{
    private _contacts: any[] = contactsData;
    private _countries: any[] = countriesData;
    private _tags: any[] = tagsData;

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
        // @ Contacts - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/contacts/all')
            .reply(() => {

                // Clone the contacts
                const contacts = cloneDeep(this._contacts);

                // Sort the contacts by the name field by default
                contacts.sort((a, b) => a.name.localeCompare(b.name));

                // Return the response
                return [200, contacts];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contacts Search - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/contacts/search')
            .reply(({request}) => {

                // Get the search query
                const query = request.params.get('query');

                // Clone the contacts
                let contacts = cloneDeep(this._contacts);

                // If the query exists...
                if ( query )
                {
                    // Filter the contacts
                    contacts = contacts.filter(contact => contact.name && contact.name.toLowerCase().includes(query.toLowerCase()));
                }

                // Sort the contacts by the name field by default
                contacts.sort((a, b) => a.name.localeCompare(b.name));

                // Return the response
                return [200, contacts];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/contacts/contact')
            .reply(({request}) => {

                // Get the id from the params
                const id = request.params.get('id');

                // Clone the contacts
                const contacts = cloneDeep(this._contacts);

                // Find the contact
                const contact = contacts.find(item => item.id === id);

                // Return the response
                return [200, contact];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/apps/contacts/contact')
            .reply(() => {

                // Generate a new contact
                const newContact = {
                    id          : FuseMockApiUtils.guid(),
                    avatar      : null,
                    name        : 'New Contact',
                    emails      : [],
                    phoneNumbers: [],
                    job         : {
                        title  : '',
                        company: ''
                    },
                    birthday    : null,
                    address     : null,
                    notes       : null,
                    tags        : []
                };

                // Unshift the new contact
                this._contacts.unshift(newContact);

                // Return the response
                return [200, newContact];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/contacts/contact')
            .reply(({request}) => {

                // Get the id and contact
                const id = request.body.id;
                const contact = cloneDeep(request.body.contact);

                // Prepare the updated contact
                let updatedContact = null;

                // Find the contact and update it
                this._contacts.forEach((item, index, contacts) => {

                    if ( item.id === id )
                    {
                        // Update the contact
                        contacts[index] = assign({}, contacts[index], contact);

                        // Store the updated contact
                        updatedContact = contacts[index];
                    }
                });

                // Return the response
                return [200, updatedContact];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onDelete('api/apps/contacts/contact')
            .reply(({request}) => {

                // Get the id
                const id = request.params.get('id');

                // Find the contact and delete it
                this._contacts.forEach((item, index) => {

                    if ( item.id === id )
                    {
                        this._contacts.splice(index, 1);
                    }
                });

                // Return the response
                return [200, true];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Countries - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/contacts/countries')
            .reply(() => [200, cloneDeep(this._countries)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/contacts/tags')
            .reply(() => [200, cloneDeep(this._tags)]);

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/apps/contacts/tag')
            .reply(({request}) => {

                // Get the tag
                const newTag = cloneDeep(request.body.tag);

                // Generate a new GUID
                newTag.id = FuseMockApiUtils.guid();

                // Unshift the new tag
                this._tags.unshift(newTag);

                // Return the response
                return [200, newTag];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/contacts/tag')
            .reply(({request}) => {

                // Get the id and tag
                const id = request.body.id;
                const tag = cloneDeep(request.body.tag);

                // Prepare the updated tag
                let updatedTag = null;

                // Find the tag and update it
                this._tags.forEach((item, index, tags) => {

                    if ( item.id === id )
                    {
                        // Update the tag
                        tags[index] = assign({}, tags[index], tag);

                        // Store the updated tag
                        updatedTag = tags[index];
                    }
                });

                // Return the response
                return [200, updatedTag];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tag - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onDelete('api/apps/contacts/tag')
            .reply(({request}) => {

                // Get the id
                const id = request.params.get('id');

                // Find the tag and delete it
                this._tags.forEach((item, index) => {

                    if ( item.id === id )
                    {
                        this._tags.splice(index, 1);
                    }
                });

                // Get the contacts that have the tag
                const contactsWithTag = this._contacts.filter(contact => contact.tags.indexOf(id) > -1);

                // Iterate through them and delete the tag
                contactsWithTag.forEach((contact) => {
                    contact.tags.splice(contact.tags.indexOf(id), 1);
                });

                // Return the response
                return [200, true];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Avatar - POST
        // -----------------------------------------------------------------------------------------------------

        /**
         * Read the given file as mock-api url
         *
         * @param file
         */
        const readAsDataURL = (file: File): Promise<any> =>

            // Return a new promise
            new Promise((resolve, reject) => {

                // Create a new reader
                const reader = new FileReader();

                // Resolve the promise on success
                reader.onload = (): void => {
                    resolve(reader.result);
                };

                // Reject the promise on error
                reader.onerror = (e): void => {
                    reject(e);
                };

                // Read the file as the
                reader.readAsDataURL(file);
            })
        ;

        this._fuseMockApiService
            .onPost('api/apps/contacts/avatar')
            .reply(({request}) => {

                // Get the id and avatar
                const id = request.body.id;
                const avatar = request.body.avatar;

                // Prepare the updated contact
                let updatedContact: any = null;

                // In a real world application, this would return the path
                // of the saved image file (from host, S3 bucket, etc.) but,
                // for the sake of the demo, we encode the image to base64
                // and return it as the new path of the uploaded image since
                // the src attribute of the img tag works with both image urls
                // and encoded images.
                return from(readAsDataURL(avatar)).pipe(
                    map((path) => {

                        // Find the contact and update it
                        this._contacts.forEach((item, index, contacts) => {

                            if ( item.id === id )
                            {
                                // Update the avatar
                                contacts[index].avatar = path;

                                // Store the updated contact
                                updatedContact = contacts[index];
                            }
                        });

                        // Return the response
                        return [200, updatedContact];
                    })
                );
            });
    }
}
