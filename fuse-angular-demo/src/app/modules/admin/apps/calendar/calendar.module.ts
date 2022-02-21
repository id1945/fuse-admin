import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FuseDateRangeModule } from '@fuse/components/date-range';
import { SharedModule } from 'app/shared/shared.module';
import { CalendarComponent } from 'app/modules/admin/apps/calendar/calendar.component';
import { CalendarRecurrenceComponent } from 'app/modules/admin/apps/calendar/recurrence/recurrence.component';
import { CalendarSettingsComponent } from 'app/modules/admin/apps/calendar/settings/settings.component';
import { CalendarSidebarComponent } from 'app/modules/admin/apps/calendar/sidebar/sidebar.component';
import { calendarRoutes } from 'app/modules/admin/apps/calendar/calendar.routing';

@NgModule({
    declarations: [
        CalendarComponent,
        CalendarRecurrenceComponent,
        CalendarSettingsComponent,
        CalendarSidebarComponent
    ],
    imports     : [
        RouterModule.forChild(calendarRoutes),
        ScrollingModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatMomentDateModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatTooltipModule,
        FullCalendarModule,
        FuseDateRangeModule,
        SharedModule
    ],
    providers   : [
        {
            provide : MAT_DATE_FORMATS,
            useValue: {
                parse  : {
                    dateInput: 'DD.MM.YYYY'
                },
                display: {
                    dateInput         : 'DD.MM.YYYY',
                    monthYearLabel    : 'MMM YYYY',
                    dateA11yLabel     : 'DD.MM.YYYY',
                    monthYearA11yLabel: 'MMMM YYYY'
                }
            }
        }
    ]
})
export class CalendarModule
{
}
