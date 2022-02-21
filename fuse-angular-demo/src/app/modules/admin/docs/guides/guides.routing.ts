import { Route } from '@angular/router';
import { GuidesComponent } from 'app/modules/admin/docs/guides/guides.component';
import { IntroductionComponent } from 'app/modules/admin/docs/guides/getting-started/introduction/introduction';
import { PrerequisitesComponent } from 'app/modules/admin/docs/guides/getting-started/prerequisites/prerequisites';
import { InstallationComponent } from 'app/modules/admin/docs/guides/getting-started/installation/installation';
import { ServingComponent } from 'app/modules/admin/docs/guides/getting-started/serving/serving';
import { DirectoryStructureComponent } from 'app/modules/admin/docs/guides/development/directory-structure/directory-structure';
import { ComponentStructureComponent } from 'app/modules/admin/docs/guides/development/component-structure/component-structure';
import { StarterKitComponent } from 'app/modules/admin/docs/guides/development/starter-kit/starter-kit';
import { DeploymentComponent } from 'app/modules/admin/docs/guides/development/deployment/deployment';
import { UpdatingComponent } from 'app/modules/admin/docs/guides/development/updating/updating';
import { ThemeLayoutsComponent } from 'app/modules/admin/docs/guides/customization/theme-layouts/theme-layouts';
import { PageLayoutsComponent } from 'app/modules/admin/docs/guides/customization/page-layouts/page-layouts';
import { TailwindCSSComponent } from 'app/modules/admin/docs/guides/customization/tailwindcss/tailwindcss';
import { ThemingComponent } from 'app/modules/admin/docs/guides/customization/theming/theming';
import { ComponentThemingComponent } from 'app/modules/admin/docs/guides/customization/component-theming/component-theming';
import { SplashScreenCustomizationComponent } from 'app/modules/admin/docs/guides/customization/splash-screen/splash-screen';
import { MultiLanguageCustomizationComponent } from 'app/modules/admin/docs/guides/customization/multi-language/multi-language';
import { JwtComponent } from 'app/modules/admin/docs/guides/authentication/jwt/jwt';

export const guidesRoutes: Route[] = [
    {
        path     : '',
        component: GuidesComponent,
        children : [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'getting-started'
            },
            {
                path    : 'getting-started',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'introduction'
                    },
                    {
                        path     : 'introduction',
                        component: IntroductionComponent
                    },
                    {
                        path     : 'prerequisites',
                        component: PrerequisitesComponent
                    },
                    {
                        path     : 'installation',
                        component: InstallationComponent
                    },
                    {
                        path     : 'serving',
                        component: ServingComponent
                    }
                ]
            },
            {
                path    : 'development',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'structure'
                    },
                    {
                        path     : 'directory-structure',
                        component: DirectoryStructureComponent
                    },
                    {
                        path     : 'component-structure',
                        component: ComponentStructureComponent
                    },
                    {
                        path     : 'starter-kit',
                        component: StarterKitComponent
                    },
                    {
                        path     : 'deployment',
                        component: DeploymentComponent
                    },
                    {
                        path     : 'updating',
                        component: UpdatingComponent
                    }
                ]
            },
            {
                path    : 'customization',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'theme-layouts'
                    },
                    {
                        path     : 'theme-layouts',
                        component: ThemeLayoutsComponent
                    },
                    {
                        path     : 'page-layouts',
                        component: PageLayoutsComponent
                    },
                    {
                        path     : 'tailwindcss',
                        component: TailwindCSSComponent
                    },
                    {
                        path     : 'theming',
                        component: ThemingComponent
                    },
                    {
                        path     : 'component-theming',
                        component: ComponentThemingComponent
                    },
                    {
                        path     : 'splash-screen',
                        component: SplashScreenCustomizationComponent
                    },
                    {
                        path     : 'multi-language',
                        component: MultiLanguageCustomizationComponent
                    }
                ]
            },
            {
                path    : 'authentication',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'jwt'
                    },
                    {
                        path     : 'jwt',
                        component: JwtComponent
                    }
                ]
            }
        ]
    }
];
