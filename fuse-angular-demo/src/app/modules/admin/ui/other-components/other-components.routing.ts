import { Route } from '@angular/router';
import { OtherComponentsComponent } from 'app/modules/admin/ui/other-components/other-components.component';
import { OverviewComponent } from 'app/modules/admin/ui/other-components/common/overview/overview.component';
import { LanguagesComponent } from 'app/modules/admin/ui/other-components/common/languages/languages.component';
import { MessagesComponent } from 'app/modules/admin/ui/other-components/common/messages/messages.component';
import { NotificationsComponent } from 'app/modules/admin/ui/other-components/common/notifications/notifications.component';
import { QuickChatComponent } from 'app/modules/admin/ui/other-components/common/quick-chat/quick-chat.component';
import { SearchComponent } from 'app/modules/admin/ui/other-components/common/search/search.component';
import { ShortcutsComponent } from 'app/modules/admin/ui/other-components/common/shortcuts/shortcuts.component';
import { UserComponent } from 'app/modules/admin/ui/other-components/common/user/user.component';
import { ApexChartsComponent } from 'app/modules/admin/ui/other-components/third-party/apex-charts/apex-charts.component';
import { FullCalendarComponent } from 'app/modules/admin/ui/other-components/third-party/full-calendar/full-calendar.component';
import { NgxMarkdownComponent } from 'app/modules/admin/ui/other-components/third-party/ngx-markdown/ngx-markdown.component';
import { QuillEditorComponent } from 'app/modules/admin/ui/other-components/third-party/quill-editor/quill-editor.component';

export const otherComponentsRoutes: Route[] = [
    {
        path     : '',
        component: OtherComponentsComponent,
        children : [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'common/overview'
            },
            {
                path    : 'common',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: OverviewComponent
                    },
                    {
                        path     : 'languages',
                        component: LanguagesComponent
                    },
                    {
                        path     : 'messages',
                        component: MessagesComponent
                    },
                    {
                        path     : 'notifications',
                        component: NotificationsComponent
                    },
                    {
                        path     : 'search',
                        component: SearchComponent
                    },
                    {
                        path     : 'quick-chat',
                        component: QuickChatComponent
                    },
                    {
                        path     : 'shortcuts',
                        component: ShortcutsComponent
                    },
                    {
                        path     : 'user',
                        component: UserComponent
                    }
                ]
            },
            {
                path    : 'third-party',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'apex-charts'
                    },
                    {
                        path     : 'apex-charts',
                        component: ApexChartsComponent
                    },
                    {
                        path     : 'full-calendar',
                        component: FullCalendarComponent
                    },
                    {
                        path     : 'ngx-markdown',
                        component: NgxMarkdownComponent
                    },
                    {
                        path     : 'quill-editor',
                        component: QuillEditorComponent
                    }
                ]
            }
        ]
    }
];
