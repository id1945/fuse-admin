import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'app/shared/shared.module';
import { DemoPlaceholderModule } from 'app/modules/admin/ui/page-layouts/common/demo-placeholder/demo-placeholder.module';
import { DemoSidebarModule } from 'app/modules/admin/ui/page-layouts/common/demo-sidebar/demo-sidebar.module';
import { LayoutOverviewModule } from 'app/modules/admin/ui/page-layouts/common/layout-overview/layout-overview.module';
import { LayoutOverviewComponent } from 'app/modules/admin/ui/page-layouts/common/layout-overview/layout-overview.component';

import { OverviewComponent } from 'app/modules/admin/ui/page-layouts/overview/overview.component';

import { EmptyNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/empty/normal-scroll/empty.component';
import { EmptyPageScrollComponent } from 'app/modules/admin/ui/page-layouts/empty/page-scroll/empty.component';

import { CardedFullwidthPageScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/fullwidth/page-scroll/fullwidth.component';
import { CardedFullwidthNormalScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/fullwidth/normal-scroll/fullwidth.component';
import { CardedFullwidthContentScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/fullwidth/content-scroll/fullwidth.component';

import { CardedLeftSidebar1NormalScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/left-sidebar-1/normal-scroll/left-sidebar-1.component';
import { CardedLeftSidebar1PageScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/left-sidebar-1/page-scroll/left-sidebar-1.component';
import { CardedLeftSidebar1ContentScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/left-sidebar-1/content-scroll/left-sidebar-1.component';

import { CardedLeftSidebar2ContentScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/left-sidebar-2/content-scroll/left-sidebar-2.component';
import { CardedLeftSidebar2NormalScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/left-sidebar-2/normal-scroll/left-sidebar-2.component';
import { CardedLeftSidebar2PageScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/left-sidebar-2/page-scroll/left-sidebar-2.component';

import { CardedRightSidebar2PageScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/right-sidebar-2/page-scroll/right-sidebar-2.component';
import { CardedRightSidebar1NormalScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/right-sidebar-1/normal-scroll/right-sidebar-1.component';
import { CardedRightSidebar2ContentScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/right-sidebar-2/content-scroll/right-sidebar-2.component';

import { CardedRightSidebar1PageScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/right-sidebar-1/page-scroll/right-sidebar-1.component';
import { CardedRightSidebar1ContentScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/right-sidebar-1/content-scroll/right-sidebar-1.component';
import { CardedRightSidebar2NormalScrollComponent } from 'app/modules/admin/ui/page-layouts/carded/right-sidebar-2/normal-scroll/right-sidebar-2.component';

import { SimpleFullwidth1NormalScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/fullwidth-1/normal-scroll/fullwidth-1.component';
import { SimpleFullwidth1PageScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/fullwidth-1/page-scroll/fullwidth-1.component';
import { SimpleFullwidth1ContentScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/fullwidth-1/content-scroll/fullwidth-1.component';

import { SimpleFullwidth2NormalScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/fullwidth-2/normal-scroll/fullwidth-2.component';
import { SimpleFullwidth2PageScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/fullwidth-2/page-scroll/fullwidth-2.component';
import { SimpleFullwidth2ContentScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/fullwidth-2/content-scroll/fullwidth-2.component';

import { SimpleLeftSidebar1NormalScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/left-sidebar-1/normal-scroll/left-sidebar-1.component';
import { SimpleLeftSidebar1PageScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/left-sidebar-1/page-scroll/left-sidebar-1.component';
import { SimpleLeftSidebar1ContentScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/left-sidebar-1/content-scroll/left-sidebar-1.component';

import { SimpleLeftSidebar2NormalScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/left-sidebar-2/normal-scroll/left-sidebar-2.component';
import { SimpleLeftSidebar2PageScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/left-sidebar-2/page-scroll/left-sidebar-2.component';
import { SimpleLeftSidebar2ContentScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/left-sidebar-2/content-scroll/left-sidebar-2.component';
import { SimpleLeftSidebar2InnerScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/left-sidebar-2/inner-scroll/left-sidebar-2.component';

import { SimpleLeftSidebar3NormalScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/left-sidebar-3/normal-scroll/left-sidebar-3.component';
import { SimpleLeftSidebar3PageScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/left-sidebar-3/page-scroll/left-sidebar-3.component';
import { SimpleLeftSidebar3ScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/left-sidebar-3/content-scroll/left-sidebar-3.component';

import { SimpleRightSidebar1NormalScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/right-sidebar-1/normal-scroll/right-sidebar-1.component';
import { SimpleRightSidebar1PageScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/right-sidebar-1/page-scroll/right-sidebar-1.component';
import { SimpleRightSidebar1ContentScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/right-sidebar-1/content-scroll/right-sidebar-1.component';

import { SimpleRightSidebar2NormalScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/right-sidebar-2/normal-scroll/right-sidebar-2.component';
import { SimpleRightSidebar2PageScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/right-sidebar-2/page-scroll/right-sidebar-2.component';
import { SimpleRightSidebar2ContentScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/right-sidebar-2/content-scroll/right-sidebar-2.component';
import { SimpleRightSidebar2InnerScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/right-sidebar-2/inner-scroll/right-sidebar-2.component';

import { SimpleRightSidebar3NormalScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/right-sidebar-3/normal-scroll/right-sidebar-3.component';
import { SimpleRightSidebar3PageScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/right-sidebar-3/page-scroll/right-sidebar-3.component';
import { SimpleRightSidebar3ContentScrollComponent } from 'app/modules/admin/ui/page-layouts/simple/right-sidebar-3/content-scroll/right-sidebar-3.component';

export const overviews = {
    empty : {
        title           : 'Empty Layout',
        description     : 'Layout that spans the entire width of the content area with 2 different scroll modes.',
        availableOptions: [
            {
                value: 'normalScroll',
                title: 'Normal Scroll'
            },
            {
                value: 'pageScroll',
                title: 'Page Scroll'
            }
        ],
        selectedOption  : 'normalScroll',
        options         : {
            normalScroll: {
                description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                link       : '/ui/page-layouts/empty/normal-scroll',
                component  : EmptyNormalScrollComponent
            },
            pageScroll  : {
                description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                link       : '/ui/page-layouts/empty/page-scroll',
                component  : EmptyPageScrollComponent
            }
        }
    },
    carded: {
        fullwidth    : {
            title           : 'Carded Fullwidth Layout',
            description     : 'Carded layout that spans the entire width of the content area with a dedicated header and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/carded/fullwidth/normal-scroll',
                    component  : CardedFullwidthNormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/carded/fullwidth/page-scroll',
                    component  : CardedFullwidthPageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/carded/fullwidth/content-scroll',
                    component  : CardedFullwidthContentScrollComponent
                }
            }
        },
        leftSidebar1 : {
            title           : 'Carded Left Sidebar #1',
            description     : 'Carded layout with a left sidebar, a dedicated header and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/carded/left-sidebar-1/normal-scroll',
                    component  : CardedLeftSidebar1NormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/carded/left-sidebar-1/page-scroll',
                    component  : CardedLeftSidebar1PageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/carded/left-sidebar-1/content-scroll',
                    component  : CardedLeftSidebar1ContentScrollComponent
                }
            }
        },
        leftSidebar2 : {
            title           : 'Carded Left Sidebar #2',
            description     : 'Carded layout with a left sidebar, a dedicated header and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/carded/left-sidebar-2/normal-scroll',
                    component  : CardedLeftSidebar2NormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/carded/left-sidebar-2/page-scroll',
                    component  : CardedLeftSidebar2PageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/carded/left-sidebar-2/content-scroll',
                    component  : CardedLeftSidebar2ContentScrollComponent
                }
            }
        },
        rightSidebar1: {
            title           : 'Carded Right Sidebar #1',
            description     : 'Carded layout with a right sidebar, a dedicated header and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/carded/right-sidebar-1/normal-scroll',
                    component  : CardedRightSidebar1NormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/carded/right-sidebar-1/page-scroll',
                    component  : CardedRightSidebar1PageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/carded/right-sidebar-1/content-scroll',
                    component  : CardedRightSidebar1ContentScrollComponent
                }
            }
        },
        rightSidebar2: {
            title           : 'Carded Right Sidebar #2',
            description     : 'Carded layout with a right sidebar, a dedicated header and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/carded/right-sidebar-2/normal-scroll',
                    component  : CardedRightSidebar2NormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/carded/right-sidebar-2/page-scroll',
                    component  : CardedRightSidebar2PageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/carded/right-sidebar-2/content-scroll',
                    component  : CardedRightSidebar2ContentScrollComponent
                }
            }
        }
    },
    simple: {
        fullwidth1    : {
            title           : 'Fullwidth #1',
            description     : 'Layout that spans the entire width of the content area with a dedicated header and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/simple/fullwidth-1/normal-scroll',
                    component  : SimpleFullwidth1NormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/simple/fullwidth-1/page-scroll',
                    component  : SimpleFullwidth1PageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/simple/fullwidth-1/content-scroll',
                    component  : SimpleFullwidth1ContentScrollComponent
                }
            }
        },
        fullwidth2    : {
            title           : 'Fullwidth #2',
            description     : 'Layout that spans the entire width of the content area with a dedicated header, tabs and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/simple/fullwidth-2/normal-scroll',
                    component  : SimpleFullwidth2NormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/simple/fullwidth-2/page-scroll',
                    component  : SimpleFullwidth2PageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/simple/fullwidth-2/content-scroll',
                    component  : SimpleFullwidth2ContentScrollComponent
                }
            }
        },
        leftSidebar1 : {
            title           : 'Left Sidebar #1',
            description     : 'Layout with a left sidebar and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/simple/left-sidebar-1/normal-scroll',
                    component  : SimpleLeftSidebar1NormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/simple/left-sidebar-1/page-scroll',
                    component  : SimpleLeftSidebar1PageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/simple/left-sidebar-1/content-scroll',
                    component  : SimpleLeftSidebar1ContentScrollComponent
                }
            }
        },
        leftSidebar2 : {
            title           : 'Left Sidebar #2',
            description     : 'Layout with a left sidebar, a dedicated header and 4 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                },
                {
                    value: 'innerScroll',
                    title: 'Inner Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/simple/left-sidebar-2/normal-scroll',
                    component  : SimpleLeftSidebar2NormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/simple/left-sidebar-2/page-scroll',
                    component  : SimpleLeftSidebar2PageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/simple/left-sidebar-2/content-scroll',
                    component  : SimpleLeftSidebar2ContentScrollComponent
                },
                innerScroll  : {
                    description: 'Only the inner content area of the page scrolls making sidebar and everything else to stick into their positions.',
                    link       : '/ui/page-layouts/simple/left-sidebar-2/inner-scroll',
                    component  : SimpleLeftSidebar2InnerScrollComponent
                }
            }
        },
        leftSidebar3 : {
            title           : 'Left Sidebar #3',
            description     : 'Layout with left sidebar, a fullwidth dedicated header and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/simple/left-sidebar-3/normal-scroll',
                    component  : SimpleLeftSidebar3NormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/simple/left-sidebar-3/page-scroll',
                    component  : SimpleLeftSidebar3PageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/simple/left-sidebar-3/content-scroll',
                    component  : SimpleLeftSidebar3ScrollComponent
                }
            }
        },
        rightSidebar1: {
            title           : 'Right Sidebar #1',
            description     : 'Layout with a right sidebar and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/simple/right-sidebar-1/normal-scroll',
                    component  : SimpleRightSidebar1NormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/simple/right-sidebar-1/page-scroll',
                    component  : SimpleRightSidebar1PageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/simple/right-sidebar-1/content-scroll',
                    component  : SimpleRightSidebar1ContentScrollComponent
                }
            }
        },
        rightSidebar2: {
            title           : 'Right Sidebar #2',
            description     : 'Layout with a right sidebar, a dedicated header and 4 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                },
                {
                    value: 'innerScroll',
                    title: 'Inner Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/simple/right-sidebar-2/normal-scroll',
                    component  : SimpleRightSidebar2NormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/simple/right-sidebar-2/page-scroll',
                    component  : SimpleRightSidebar2PageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/simple/right-sidebar-2/content-scroll',
                    component  : SimpleRightSidebar2ContentScrollComponent
                },
                innerScroll  : {
                    description: 'Only the inner content area of the page scrolls making sidebar and everything else to stick into their positions.',
                    link       : '/ui/page-layouts/simple/right-sidebar-2/inner-scroll',
                    component  : SimpleRightSidebar2InnerScrollComponent
                }
            }
        },
        rightSidebar3: {
            title           : 'Right Sidebar #3',
            description     : 'Layout with right sidebar, a fullwidth dedicated header and 3 different scroll modes.',
            availableOptions: [
                {
                    value: 'normalScroll',
                    title: 'Normal Scroll'
                },
                {
                    value: 'pageScroll',
                    title: 'Page Scroll'
                },
                {
                    value: 'contentScroll',
                    title: 'Content Scroll'
                }
            ],
            selectedOption  : 'normalScroll',
            options         : {
                normalScroll : {
                    description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
                    link       : '/ui/page-layouts/simple/right-sidebar-3/normal-scroll',
                    component  : SimpleRightSidebar3NormalScrollComponent
                },
                pageScroll   : {
                    description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
                    link       : '/ui/page-layouts/simple/right-sidebar-3/page-scroll',
                    component  : SimpleRightSidebar3PageScrollComponent
                },
                contentScroll: {
                    description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
                    link       : '/ui/page-layouts/simple/right-sidebar-3/content-scroll',
                    component  : SimpleRightSidebar3ContentScrollComponent
                }
            }
        }
    }
};

export const routes: Route[] = [
    // Overview
    {
        path     : 'overview',
        component: OverviewComponent
    },

    // Empty
    {
        path    : 'empty',
        children: [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'overview'
            },
            {
                path     : 'overview',
                component: LayoutOverviewComponent,
                data     : {
                    overview: overviews.empty
                }
            },
            {
                path     : 'normal-scroll',
                component: EmptyNormalScrollComponent
            },
            {
                path     : 'page-scroll',
                component: EmptyPageScrollComponent
            }
        ]
    },

    // Carded
    {
        path    : 'carded',
        children: [
            {
                path    : 'fullwidth',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.carded.fullwidth
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: CardedFullwidthNormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: CardedFullwidthPageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: CardedFullwidthContentScrollComponent
                    }
                ]
            },
            {
                path    : 'left-sidebar-1',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.carded.leftSidebar1
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: CardedLeftSidebar1NormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: CardedLeftSidebar1PageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: CardedLeftSidebar1ContentScrollComponent
                    }
                ]
            },
            {
                path    : 'left-sidebar-2',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.carded.leftSidebar2
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: CardedLeftSidebar2NormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: CardedLeftSidebar2PageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: CardedLeftSidebar2ContentScrollComponent
                    }
                ]
            },
            {
                path    : 'right-sidebar-1',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.carded.rightSidebar1
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: CardedRightSidebar1NormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: CardedRightSidebar1PageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: CardedRightSidebar1ContentScrollComponent
                    }
                ]
            },
            {
                path    : 'right-sidebar-2',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.carded.rightSidebar2
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: CardedRightSidebar2NormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: CardedRightSidebar2PageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: CardedRightSidebar2ContentScrollComponent
                    }
                ]
            }
        ]
    },

    // Simple
    {
        path    : 'simple',
        children: [
            {
                path    : 'fullwidth-1',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.simple.fullwidth1
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: SimpleFullwidth1NormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: SimpleFullwidth1PageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: SimpleFullwidth1ContentScrollComponent
                    }
                ]
            },
            {
                path    : 'fullwidth-2',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.simple.fullwidth2
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: SimpleFullwidth2NormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: SimpleFullwidth2PageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: SimpleFullwidth2ContentScrollComponent
                    }
                ]
            },
            {
                path    : 'left-sidebar-1',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.simple.leftSidebar1
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: SimpleLeftSidebar1NormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: SimpleLeftSidebar1PageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: SimpleLeftSidebar1ContentScrollComponent
                    }
                ]
            },
            {
                path    : 'left-sidebar-2',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.simple.leftSidebar2
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: SimpleLeftSidebar2NormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: SimpleLeftSidebar2PageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: SimpleLeftSidebar2ContentScrollComponent
                    },
                    {
                        path     : 'inner-scroll',
                        component: SimpleLeftSidebar2InnerScrollComponent
                    }
                ]
            },
            {
                path    : 'left-sidebar-3',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.simple.leftSidebar3
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: SimpleLeftSidebar3NormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: SimpleLeftSidebar3PageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: SimpleLeftSidebar3ScrollComponent
                    }
                ]
            },
            {
                path    : 'right-sidebar-1',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.simple.rightSidebar1
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: SimpleRightSidebar1NormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: SimpleRightSidebar1PageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: SimpleRightSidebar1ContentScrollComponent
                    }
                ]
            },
            {
                path    : 'right-sidebar-2',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.simple.rightSidebar2
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: SimpleRightSidebar2NormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: SimpleRightSidebar2PageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: SimpleRightSidebar2ContentScrollComponent
                    },
                    {
                        path     : 'inner-scroll',
                        component: SimpleRightSidebar2InnerScrollComponent
                    }
                ]
            },
            {
                path    : 'right-sidebar-3',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: LayoutOverviewComponent,
                        data     : {
                            overview: overviews.simple.rightSidebar3
                        }
                    },
                    {
                        path     : 'normal-scroll',
                        component: SimpleRightSidebar3NormalScrollComponent
                    },
                    {
                        path     : 'page-scroll',
                        component: SimpleRightSidebar3PageScrollComponent
                    },
                    {
                        path     : 'content-scroll',
                        component: SimpleRightSidebar3ContentScrollComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    declarations: [
        OverviewComponent,

        // Empty
        EmptyNormalScrollComponent,
        EmptyPageScrollComponent,

        // Carded - Fullwidth
        CardedFullwidthNormalScrollComponent,
        CardedFullwidthPageScrollComponent,
        CardedFullwidthContentScrollComponent,

        // Carded - Left sidebar
        CardedLeftSidebar1NormalScrollComponent,
        CardedLeftSidebar1PageScrollComponent,
        CardedLeftSidebar1ContentScrollComponent,

        CardedLeftSidebar2NormalScrollComponent,
        CardedLeftSidebar2PageScrollComponent,
        CardedLeftSidebar2ContentScrollComponent,

        // Carded - Right sidebar
        CardedRightSidebar1NormalScrollComponent,
        CardedRightSidebar1PageScrollComponent,
        CardedRightSidebar1ContentScrollComponent,

        CardedRightSidebar2NormalScrollComponent,
        CardedRightSidebar2PageScrollComponent,
        CardedRightSidebar2ContentScrollComponent,

        // Simple - Fullwidth
        SimpleFullwidth1NormalScrollComponent,
        SimpleFullwidth1PageScrollComponent,
        SimpleFullwidth1ContentScrollComponent,

        SimpleFullwidth2NormalScrollComponent,
        SimpleFullwidth2PageScrollComponent,
        SimpleFullwidth2ContentScrollComponent,

        // Simple - Left sidebar
        SimpleLeftSidebar1NormalScrollComponent,
        SimpleLeftSidebar1PageScrollComponent,
        SimpleLeftSidebar1ContentScrollComponent,

        SimpleLeftSidebar2NormalScrollComponent,
        SimpleLeftSidebar2PageScrollComponent,
        SimpleLeftSidebar2ContentScrollComponent,
        SimpleLeftSidebar2InnerScrollComponent,

        SimpleLeftSidebar3NormalScrollComponent,
        SimpleLeftSidebar3PageScrollComponent,
        SimpleLeftSidebar3ScrollComponent,

        // Simple - Right sidebar
        SimpleRightSidebar1NormalScrollComponent,
        SimpleRightSidebar1PageScrollComponent,
        SimpleRightSidebar1ContentScrollComponent,

        SimpleRightSidebar2NormalScrollComponent,
        SimpleRightSidebar2PageScrollComponent,
        SimpleRightSidebar2ContentScrollComponent,
        SimpleRightSidebar2InnerScrollComponent,

        SimpleRightSidebar3NormalScrollComponent,
        SimpleRightSidebar3PageScrollComponent,
        SimpleRightSidebar3ContentScrollComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatTabsModule,
        SharedModule,
        DemoPlaceholderModule,
        DemoSidebarModule,
        LayoutOverviewModule
    ]
})
export class PageLayoutsModule
{
}
