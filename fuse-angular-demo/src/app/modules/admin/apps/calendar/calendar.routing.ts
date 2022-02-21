import { Route } from '@angular/router';
import { CalendarComponent } from 'app/modules/admin/apps/calendar/calendar.component';
import { CalendarSettingsComponent } from 'app/modules/admin/apps/calendar/settings/settings.component';
import { CalendarCalendarsResolver, CalendarSettingsResolver, CalendarWeekdaysResolver } from 'app/modules/admin/apps/calendar/calendar.resolvers';

export const calendarRoutes: Route[] = [
    {
        path     : '',
        component: CalendarComponent,
        resolve  : {
            calendars: CalendarCalendarsResolver,
            settings : CalendarSettingsResolver,
            weekdays : CalendarWeekdaysResolver
        }
    },
    {
        path     : 'settings',
        component: CalendarSettingsComponent,
        resolve  : {
            settings: CalendarSettingsResolver
        }
    }
];
