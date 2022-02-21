import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { items as itemsData } from 'app/mock-api/apps/file-manager/data';

@Injectable({
    providedIn: 'root'
})
export class FileManagerMockApi
{
    private _items: any[] = itemsData;

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
        // @ Items - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/file-manager')
            .reply(({request}) => {

                // Clone the items
                let items = cloneDeep(this._items);

                // See if a folder id exist
                const folderId = request.params.get('folderId') ?? null;

                // Filter the items by folder id. If folder id is null,
                // that means we want to root items which have folder id
                // of null
                items = items.filter(item => item.folderId === folderId);

                // Separate the items by folders and files
                const folders = items.filter(item => item.type === 'folder');
                const files = items.filter(item => item.type !== 'folder');

                // Sort the folders and files alphabetically by filename
                folders.sort((a, b) => a.name.localeCompare(b.name));
                files.sort((a, b) => a.name.localeCompare(b.name));

                // Figure out the path and attach it to the response
                // Prepare the empty paths array
                const pathItems = cloneDeep(this._items);
                const path = [];

                // Prepare the current folder
                let currentFolder = null;

                // Get the current folder and add it as the first entry
                if ( folderId )
                {
                    currentFolder = pathItems.find(item => item.id === folderId);
                    path.push(currentFolder);
                }

                // Start traversing and storing the folders as a path array
                // until we hit null on the folder id
                while ( currentFolder?.folderId )
                {
                    currentFolder = pathItems.find(item => item.id === currentFolder.folderId);
                    if ( currentFolder )
                    {
                        path.unshift(currentFolder);
                    }
                }

                return [
                    200,
                    {
                        folders,
                        files,
                        path
                    }
                ];
            });
    }
}
