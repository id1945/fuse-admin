export interface Task
{
    id?: string;
    content?: string;
    completed?: string;
}

export interface Label
{
    id?: string;
    title?: string;
}

export interface Note
{
    id?: string;
    title?: string;
    content?: string;
    tasks?: Task[];
    image?: string | null;
    labels?: Label[];
    archived?: boolean;
    createdAt?: string;
    updatedAt?: string | null;
}
