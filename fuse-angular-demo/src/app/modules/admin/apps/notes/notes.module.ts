import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FuseMasonryModule } from '@fuse/components/masonry';
import { SharedModule } from 'app/shared/shared.module';
import { NotesComponent } from 'app/modules/admin/apps/notes/notes.component';
import { NotesDetailsComponent } from 'app/modules/admin/apps/notes/details/details.component';
import { NotesListComponent } from 'app/modules/admin/apps/notes/list/list.component';
import { NotesLabelsComponent } from 'app/modules/admin/apps/notes/labels/labels.component';
import { notesRoutes } from 'app/modules/admin/apps/notes/notes.routing';

@NgModule({
    declarations: [
        NotesComponent,
        NotesDetailsComponent,
        NotesListComponent,
        NotesLabelsComponent
    ],
    imports     : [
        RouterModule.forChild(notesRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSidenavModule,
        FuseMasonryModule,
        SharedModule
    ]
})
export class NotesModule
{
}
