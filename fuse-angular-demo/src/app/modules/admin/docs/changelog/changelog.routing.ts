import { Route } from '@angular/router';
import { ChangelogComponent } from 'app/modules/admin/docs/changelog/changelog';

export const changelogRoutes: Route[] = [
    {
        path     : '',
        component: ChangelogComponent
    }
];
