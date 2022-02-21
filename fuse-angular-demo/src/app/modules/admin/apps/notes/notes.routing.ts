import { Route } from '@angular/router';
import { NotesComponent } from 'app/modules/admin/apps/notes/notes.component';
import { NotesListComponent } from 'app/modules/admin/apps/notes/list/list.component';

export const notesRoutes: Route[] = [
    {
        path     : '',
        component: NotesComponent,
        children : [
            {
                path     : '',
                component: NotesListComponent
            }
        ]
    }
];
