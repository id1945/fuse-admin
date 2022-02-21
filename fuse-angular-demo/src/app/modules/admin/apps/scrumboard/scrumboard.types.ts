export interface IBoard
{
    id?: string | null;
    title: string;
    description?: string | null;
    icon?: string | null;
    lastActivity?: string | null;
    lists?: IList[];
    labels?: ILabel[];
    members?: IMember[];
}

export interface IList
{
    id?: string | null;
    boardId: string;
    position: number;
    title: string;
    cards?: ICard[];
}

export interface ICard
{
    id?: string | null;
    boardId: string;
    listId: string;
    position: number;
    title: string;
    description?: string | null;
    labels?: ILabel[];
    dueDate?: string | null;
}

export interface IMember
{
    id?: string | null;
    name: string;
    avatar?: string | null;
}

export interface ILabel
{
    id: string | null;
    boardId: string;
    title: string;
}
