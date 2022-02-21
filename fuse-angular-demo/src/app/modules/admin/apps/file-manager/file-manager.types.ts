export interface Items
{
    folders: Item[];
    files: Item[];
    path: any[];
}

export interface Item
{
    id?: string;
    folderId?: string;
    name?: string;
    createdBy?: string;
    createdAt?: string;
    modifiedAt?: string;
    size?: string;
    type?: string;
    contents?: string | null;
    description?: string | null;
}
