import { Route } from '@angular/router';
import { ScrumboardBoardsComponent } from 'app/modules/admin/apps/scrumboard/boards/boards.component';
import { ScrumboardBoardResolver, ScrumboardBoardsResolver, ScrumboardCardResolver } from 'app/modules/admin/apps/scrumboard/scrumboard.resolvers';
import { ScrumboardBoardComponent } from 'app/modules/admin/apps/scrumboard/board/board.component';
import { ScrumboardCardComponent } from 'app/modules/admin/apps/scrumboard/card/card.component';

export const scrumboardRoutes: Route[] = [
    {
        path     : '',
        component: ScrumboardBoardsComponent,
        resolve  : {
            boards: ScrumboardBoardsResolver
        }
    },
    {
        path     : ':boardId',
        component: ScrumboardBoardComponent,
        resolve  : {
            board: ScrumboardBoardResolver
        },
        children : [
            {
                path     : 'card/:cardId',
                component: ScrumboardCardComponent,
                resolve  : {
                    card: ScrumboardCardResolver
                }
            }
        ]
    }
];
