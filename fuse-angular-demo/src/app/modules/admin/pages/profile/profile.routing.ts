import { Route } from '@angular/router';
import { ProfileComponent } from 'app/modules/admin/pages/profile/profile.component';

export const profileRoutes: Route[] = [
    {
        path     : '',
        component: ProfileComponent
    }
];
