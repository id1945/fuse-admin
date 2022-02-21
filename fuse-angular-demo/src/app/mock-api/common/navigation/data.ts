/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        subtitle: 'Unique dashboard designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dashboards.project',
                title: 'Project',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.analytics',
                title: 'Analytics',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/analytics'
            },
            {
                id   : 'dashboards.finance',
                title: 'Finance',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/dashboards/finance'
            },
            {
                id   : 'dashboards.crypto',
                title: 'Crypto',
                type : 'basic',
                icon : 'heroicons_outline:currency-dollar',
                link : '/dashboards/crypto'
            }
        ]
    },
    {
        id      : 'apps',
        title   : 'Applications',
        subtitle: 'Custom made application designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'apps.academy',
                title: 'Academy',
                type : 'basic',
                icon : 'heroicons_outline:academic-cap',
                link : '/apps/academy'
            },
            {
                id      : 'apps.calendar',
                title   : 'Calendar',
                subtitle: '3 upcoming events',
                type    : 'basic',
                icon    : 'heroicons_outline:calendar',
                link    : '/apps/calendar'
            },
            {
                id   : 'apps.chat',
                title: 'Chat',
                type : 'basic',
                icon : 'heroicons_outline:chat-alt',
                link : '/apps/chat'
            },
            {
                id   : 'apps.contacts',
                title: 'Contacts',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/apps/contacts'
            },
            {
                id      : 'apps.ecommerce',
                title   : 'ECommerce',
                type    : 'collapsable',
                icon    : 'heroicons_outline:shopping-cart',
                children: [
                    {
                        id   : 'apps.ecommerce.inventory',
                        title: 'Inventory',
                        type : 'basic',
                        link : '/apps/ecommerce/inventory'
                    }
                ]
            },
            {
                id   : 'apps.file-manager',
                title: 'File Manager',
                type : 'basic',
                icon : 'heroicons_outline:cloud',
                link : '/apps/file-manager'
            },
            {
                id      : 'apps.help-center',
                title   : 'Help Center',
                type    : 'collapsable',
                icon    : 'heroicons_outline:support',
                link    : '/apps/help-center',
                children: [
                    {
                        id        : 'apps.help-center.home',
                        title     : 'Home',
                        type      : 'basic',
                        link      : '/apps/help-center',
                        exactMatch: true
                    },
                    {
                        id   : 'apps.help-center.faqs',
                        title: 'FAQs',
                        type : 'basic',
                        link : '/apps/help-center/faqs'
                    },
                    {
                        id   : 'apps.help-center.guides',
                        title: 'Guides',
                        type : 'basic',
                        link : '/apps/help-center/guides'
                    },
                    {
                        id   : 'apps.help-center.support',
                        title: 'Support',
                        type : 'basic',
                        link : '/apps/help-center/support'
                    }
                ]
            },
            {
                id   : 'apps.mailbox',
                title: 'Mailbox',
                type : 'basic',
                icon : 'heroicons_outline:mail',
                link : '/apps/mailbox',
                badge: {
                    title  : '27',
                    classes: 'px-2 bg-pink-600 text-white rounded-full'
                }
            },
            {
                id   : 'apps.notes',
                title: 'Notes',
                type : 'basic',
                icon : 'heroicons_outline:pencil-alt',
                link : '/apps/notes'
            },
            {
                id   : 'apps.scrumboard',
                title: 'Scrumboard',
                type : 'basic',
                icon : 'heroicons_outline:view-boards',
                link : '/apps/scrumboard'
            },
            {
                id   : 'apps.tasks',
                title: 'Tasks',
                type : 'basic',
                icon : 'heroicons_outline:check-circle',
                link : '/apps/tasks'
            }
        ]
    },
    {
        id      : 'pages',
        title   : 'Pages',
        subtitle: 'Custom made page designs',
        type    : 'group',
        icon    : 'heroicons_outline:document',
        children: [
            {
                id   : 'pages.activities',
                title: 'Activities',
                type : 'basic',
                icon : 'heroicons_outline:menu-alt-2',
                link : '/pages/activities'
            },
            {
                id      : 'pages.authentication',
                title   : 'Authentication',
                type    : 'collapsable',
                icon    : 'heroicons_outline:lock-closed',
                children: [
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'Sign in',
                        type    : 'collapsable',
                        children: [
                            {
                                id   : 'pages.authentication.sign-in.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/classic'
                            },
                            {
                                id   : 'pages.authentication.sign-in.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/modern'
                            },
                            {
                                id   : 'pages.authentication.sign-in.modern-reversed',
                                title: 'Modern Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/modern-reversed'
                            },
                            {
                                id   : 'pages.authentication.sign-in.split-screen',
                                title: 'Split Screen',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/split-screen'
                            },
                            {
                                id   : 'pages.authentication.sign-in.split-screen-reversed',
                                title: 'Split Screen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/split-screen-reversed'
                            },
                            {
                                id   : 'pages.authentication.sign-in.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.sign-in.fullscreen-reversed',
                                title: 'Fullscreen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/fullscreen-reversed'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.sign-up',
                        title   : 'Sign up',
                        type    : 'collapsable',
                        link    : '/pages/authentication/sign-up',
                        children: [
                            {
                                id   : 'pages.authentication.sign-up.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/classic'
                            },
                            {
                                id   : 'pages.authentication.sign-up.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/modern'
                            },
                            {
                                id   : 'pages.authentication.sign-up.modern-reversed',
                                title: 'Modern Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/modern-reversed'
                            },
                            {
                                id   : 'pages.authentication.sign-up.split-screen',
                                title: 'Split Screen',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/split-screen'
                            },
                            {
                                id   : 'pages.authentication.sign-up.split-screen-reversed',
                                title: 'Split Screen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/split-screen-reversed'
                            },
                            {
                                id   : 'pages.authentication.sign-up.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.sign-up.fullscreen-reversed',
                                title: 'Fullscreen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/fullscreen-reversed'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.sign-out',
                        title   : 'Sign out',
                        type    : 'collapsable',
                        link    : '/pages/authentication/sign-out',
                        children: [
                            {
                                id   : 'pages.authentication.sign-out.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/sign-out/classic'
                            },
                            {
                                id   : 'pages.authentication.sign-out.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/sign-out/modern'
                            },
                            {
                                id   : 'pages.authentication.sign-out.modern-reversed',
                                title: 'Modern Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-out/modern-reversed'
                            },
                            {
                                id   : 'pages.authentication.sign-out.split-screen',
                                title: 'Split Screen',
                                type : 'basic',
                                link : '/pages/authentication/sign-out/split-screen'
                            },
                            {
                                id   : 'pages.authentication.sign-out.split-screen-reversed',
                                title: 'Split Screen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-out/split-screen-reversed'
                            },
                            {
                                id   : 'pages.authentication.sign-out.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/sign-out/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.sign-out.fullscreen-reversed',
                                title: 'Fullscreen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-out/fullscreen-reversed'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.forgot-password',
                        title   : 'Forgot password',
                        type    : 'collapsable',
                        link    : '/pages/authentication/forgot-password',
                        children: [
                            {
                                id   : 'pages.authentication.forgot-password.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/classic'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/modern'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.modern-reversed',
                                title: 'Modern Reversed',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/modern-reversed'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.split-screen',
                                title: 'Split Screen',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/split-screen'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.split-screen-reversed',
                                title: 'Split Screen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/split-screen-reversed'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.fullscreen-reversed',
                                title: 'Fullscreen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/fullscreen-reversed'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.reset-password',
                        title   : 'Reset password',
                        type    : 'collapsable',
                        link    : '/pages/authentication/reset-password',
                        children: [
                            {
                                id   : 'pages.authentication.reset-password.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/classic'
                            },
                            {
                                id   : 'pages.authentication.reset-password.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/modern'
                            },
                            {
                                id   : 'pages.authentication.reset-password.modern-reversed',
                                title: 'Modern Reversed',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/modern-reversed'
                            },
                            {
                                id   : 'pages.authentication.reset-password.split-screen',
                                title: 'Split Screen',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/split-screen'
                            },
                            {
                                id   : 'pages.authentication.reset-password.split-screen-reversed',
                                title: 'Split Screen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/split-screen-reversed'
                            },
                            {
                                id   : 'pages.authentication.reset-password.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.reset-password.fullscreen-reversed',
                                title: 'Fullscreen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/fullscreen-reversed'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.unlock-session',
                        title   : 'Unlock session',
                        type    : 'collapsable',
                        link    : '/pages/authentication/unlock-session',
                        children: [
                            {
                                id   : 'pages.authentication.unlock-session.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/unlock-session/classic'
                            },
                            {
                                id   : 'pages.authentication.unlock-session.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/unlock-session/modern'
                            },
                            {
                                id   : 'pages.authentication.unlock-session.modern-reversed',
                                title: 'Modern Reversed',
                                type : 'basic',
                                link : '/pages/authentication/unlock-session/modern-reversed'
                            },
                            {
                                id   : 'pages.authentication.unlock-session.split-screen',
                                title: 'Split Screen',
                                type : 'basic',
                                link : '/pages/authentication/unlock-session/split-screen'
                            },
                            {
                                id   : 'pages.authentication.unlock-session.split-screen-reversed',
                                title: 'Split Screen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/unlock-session/split-screen-reversed'
                            },
                            {
                                id   : 'pages.authentication.unlock-session.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/unlock-session/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.unlock-session.fullscreen-reversed',
                                title: 'Fullscreen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/unlock-session/fullscreen-reversed'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.confirmation-required',
                        title   : 'Confirmation required',
                        type    : 'collapsable',
                        link    : '/pages/authentication/confirmation-required',
                        children: [
                            {
                                id   : 'pages.authentication.confirmation-required.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/confirmation-required/classic'
                            },
                            {
                                id   : 'pages.authentication.confirmation-required.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/confirmation-required/modern'
                            },
                            {
                                id   : 'pages.authentication.confirmation-required.modern-reversed',
                                title: 'Modern Reversed',
                                type : 'basic',
                                link : '/pages/authentication/confirmation-required/modern-reversed'
                            },
                            {
                                id   : 'pages.authentication.confirmation-required.split-screen',
                                title: 'Split Screen',
                                type : 'basic',
                                link : '/pages/authentication/confirmation-required/split-screen'
                            },
                            {
                                id   : 'pages.authentication.confirmation-required.split-screen-reversed',
                                title: 'Split Screen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/confirmation-required/split-screen-reversed'
                            },
                            {
                                id   : 'pages.authentication.confirmation-required.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/confirmation-required/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.confirmation-required.fullscreen-reversed',
                                title: 'Fullscreen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/confirmation-required/fullscreen-reversed'
                            }
                        ]
                    }
                ]
            },
            {
                id      : 'pages.coming-soon',
                title   : 'Coming Soon',
                type    : 'collapsable',
                icon    : 'heroicons_outline:clock',
                link    : '/pages/coming-soon',
                children: [
                    {
                        id   : 'pages.coming-soon.classic',
                        title: 'Classic',
                        type : 'basic',
                        link : '/pages/coming-soon/classic'
                    },
                    {
                        id   : 'pages.coming-soon.modern',
                        title: 'Modern',
                        type : 'basic',
                        link : '/pages/coming-soon/modern'
                    },
                    {
                        id   : 'pages.coming-soon.modern-reversed',
                        title: 'Modern Reversed',
                        type : 'basic',
                        link : '/pages/coming-soon/modern-reversed'
                    },
                    {
                        id   : 'pages.coming-soon.split-screen',
                        title: 'Split Screen',
                        type : 'basic',
                        link : '/pages/coming-soon/split-screen'
                    },
                    {
                        id   : 'pages.coming-soon.split-screen-reversed',
                        title: 'Split Screen Reversed',
                        type : 'basic',
                        link : '/pages/coming-soon/split-screen-reversed'
                    },
                    {
                        id   : 'pages.coming-soon.fullscreen',
                        title: 'Fullscreen',
                        type : 'basic',
                        link : '/pages/coming-soon/fullscreen'
                    },
                    {
                        id   : 'pages.coming-soon.fullscreen-reversed',
                        title: 'Fullscreen Reversed',
                        type : 'basic',
                        link : '/pages/coming-soon/fullscreen-reversed'
                    }
                ]
            },
            {
                id      : 'pages.error',
                title   : 'Error',
                type    : 'collapsable',
                icon    : 'heroicons_outline:exclamation-circle',
                children: [
                    {
                        id   : 'pages.error.404',
                        title: '404',
                        type : 'basic',
                        link : '/pages/error/404'
                    },
                    {
                        id   : 'pages.error.500',
                        title: '500',
                        type : 'basic',
                        link : '/pages/error/500'
                    }
                ]
            },
            {
                id      : 'pages.invoice',
                title   : 'Invoice',
                type    : 'collapsable',
                icon    : 'heroicons_outline:calculator',
                children: [
                    {
                        id      : 'pages.invoice.printable',
                        title   : 'Printable',
                        type    : 'collapsable',
                        children: [
                            {
                                id   : 'pages.invoice.printable.compact',
                                title: 'Compact',
                                type : 'basic',
                                link : '/pages/invoice/printable/compact'
                            },
                            {
                                id   : 'pages.invoice.printable.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/invoice/printable/modern'
                            }
                        ]
                    }
                ]
            },
            {
                id   : 'pages.maintenance',
                title: 'Maintenance',
                type : 'basic',
                icon : 'heroicons_outline:exclamation',
                link : '/pages/maintenance'
            },
            {
                id      : 'pages.pricing',
                title   : 'Pricing',
                type    : 'collapsable',
                icon    : 'heroicons_outline:cash',
                children: [
                    {
                        id   : 'pages.pricing.modern',
                        title: 'Modern',
                        type : 'basic',
                        link : '/pages/pricing/modern'
                    },
                    {
                        id   : 'pages.pricing.simple',
                        title: 'Simple',
                        type : 'basic',
                        link : '/pages/pricing/simple'
                    },
                    {
                        id   : 'pages.pricing.single',
                        title: 'Single',
                        type : 'basic',
                        link : '/pages/pricing/single'
                    },
                    {
                        id   : 'pages.pricing.table',
                        title: 'Table',
                        type : 'basic',
                        link : '/pages/pricing/table'
                    }
                ]
            },
            {
                id   : 'pages.profile',
                title: 'Profile',
                type : 'basic',
                icon : 'heroicons_outline:user-circle',
                link : '/pages/profile'
            },
            {
                id   : 'pages.settings',
                title: 'Settings',
                type : 'basic',
                icon : 'heroicons_outline:cog',
                link : '/pages/settings'
            }
        ]
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        subtitle: 'Building blocks of the UI & UX',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [
            {
                id   : 'user-interface.material-components',
                title: 'Material Components',
                type : 'basic',
                icon : 'heroicons_outline:chip',
                link : '/ui/material-components'
            },
            {
                id   : 'user-interface.fuse-components',
                title: 'Fuse Components',
                type : 'basic',
                icon : 'heroicons_outline:chip',
                link : '/ui/fuse-components'
            },
            {
                id   : 'user-interface.other-components',
                title: 'Other Components',
                type : 'basic',
                icon : 'heroicons_outline:chip',
                link : '/ui/other-components'
            },
            {
                id   : 'user-interface.tailwindcss',
                title: 'TailwindCSS',
                type : 'basic',
                icon : 'heroicons_outline:sparkles',
                link : '/ui/tailwindcss'
            },
            {
                id   : 'user-interface.advanced-search',
                title: 'Advanced Search',
                type : 'basic',
                icon : 'heroicons_outline:search-circle',
                link : '/ui/advanced-search'
            },
            {
                id   : 'user-interface.animations',
                title: 'Animations',
                type : 'basic',
                icon : 'heroicons_outline:play',
                link : '/ui/animations'
            },
            {
                id   : 'user-interface.cards',
                title: 'Cards',
                type : 'basic',
                icon : 'heroicons_outline:duplicate',
                link : '/ui/cards'
            },
            {
                id   : 'user-interface.colors',
                title: 'Colors',
                type : 'basic',
                icon : 'heroicons_outline:color-swatch',
                link : '/ui/colors'
            },
            {
                id   : 'user-interface.confirmation-dialog',
                title: 'Confirmation Dialog',
                type : 'basic',
                icon : 'heroicons_outline:question-mark-circle',
                link : '/ui/confirmation-dialog'
            },
            {
                id   : 'user-interface.datatable',
                title: 'Datatable',
                type : 'basic',
                icon : 'heroicons_outline:view-list',
                link : '/ui/datatable'
            },
            {
                id      : 'user-interface.forms',
                title   : 'Forms',
                type    : 'collapsable',
                icon    : 'heroicons_outline:pencil-alt',
                children: [
                    {
                        id   : 'user-interface.forms.fields',
                        title: 'Fields',
                        type : 'basic',
                        link : '/ui/forms/fields'
                    },
                    {
                        id   : 'user-interface.forms.layouts',
                        title: 'Layouts',
                        type : 'basic',
                        link : '/ui/forms/layouts'
                    },
                    {
                        id   : 'user-interface.forms.wizards',
                        title: 'Wizards',
                        type : 'basic',
                        link : '/ui/forms/wizards'
                    }
                ]
            },
            {
                id      : 'user-interface.icons',
                title   : 'Icons',
                type    : 'collapsable',
                icon    : 'heroicons_outline:lightning-bolt',
                children: [
                    {
                        id   : 'user-interface.icons.heroicons-outline',
                        title: 'Heroicons Outline',
                        type : 'basic',
                        link : '/ui/icons/heroicons-outline'
                    },
                    {
                        id   : 'user-interface.icons.heroicons-solid',
                        title: 'Heroicons Solid',
                        type : 'basic',
                        link : '/ui/icons/heroicons-solid'
                    },
                    {
                        id   : 'user-interface.icons.material-twotone',
                        title: 'Material Twotone',
                        type : 'basic',
                        link : '/ui/icons/material-twotone'
                    },
                    {
                        id   : 'user-interface.icons.material-outline',
                        title: 'Material Outline',
                        type : 'basic',
                        link : '/ui/icons/material-outline'
                    },
                    {
                        id   : 'user-interface.icons.material-solid',
                        title: 'Material Solid',
                        type : 'basic',
                        link : '/ui/icons/material-solid'
                    },
                    {
                        id   : 'user-interface.icons.iconsmind',
                        title: 'Iconsmind',
                        type : 'basic',
                        link : '/ui/icons/iconsmind'
                    },
                    {
                        id   : 'user-interface.icons.feather',
                        title: 'Feather',
                        type : 'basic',
                        link : '/ui/icons/feather'
                    }
                ]
            },
            {
                id      : 'user-interface.page-layouts',
                title   : 'Page Layouts',
                type    : 'collapsable',
                icon    : 'heroicons_outline:template',
                children: [
                    {
                        id   : 'user-interface.page-layouts.overview',
                        title: 'Overview',
                        type : 'basic',
                        link : '/ui/page-layouts/overview'
                    },
                    {
                        id   : 'user-interface.page-layouts.empty',
                        title: 'Empty',
                        type : 'basic',
                        link : '/ui/page-layouts/empty'
                    },
                    {
                        id: 'user-interface.page-layouts.carded',

                        title   : 'Carded',
                        type    : 'collapsable',
                        children: [
                            {
                                id   : 'user-interface.page-layouts.carded.fullwidth',
                                title: 'Fullwidth',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/fullwidth'
                            },
                            {
                                id   : 'user-interface.page-layouts.carded.left-sidebar-1',
                                title: 'Left Sidebar #1',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/left-sidebar-1'
                            },
                            {
                                id   : 'user-interface.page-layouts.carded.left-sidebar-2',
                                title: 'Left Sidebar #2',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/left-sidebar-2'
                            },
                            {
                                id   : 'user-interface.page-layouts.carded.right-sidebar-1',
                                title: 'Right Sidebar #1',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/right-sidebar-1'
                            },
                            {
                                id   : 'user-interface.page-layouts.carded.right-sidebar-2',
                                title: 'Right Sidebar #2',
                                type : 'basic',
                                link : '/ui/page-layouts/carded/right-sidebar-2'
                            }
                        ]
                    },
                    {
                        id      : 'user-interface.page-layouts.simple',
                        title   : 'Simple',
                        type    : 'collapsable',
                        children: [
                            {
                                id   : 'user-interface.page-layouts.simple.fullwidth-1',
                                title: 'Fullwidth #1',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/fullwidth-1'
                            },
                            {
                                id   : 'user-interface.page-layouts.simple.fullwidth-2',
                                title: 'Fullwidth #2',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/fullwidth-2'
                            },
                            {
                                id   : 'user-interface.page-layouts.simple.left-sidebar-1',
                                title: 'Left Sidebar #1',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/left-sidebar-1'
                            },
                            {
                                id   : 'user-interface.page-layouts.simple.left-sidebar-2',
                                title: 'Left Sidebar #2',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/left-sidebar-2'
                            },
                            {
                                id   : 'user-interface.page-layouts.simple.left-sidebar-3',
                                title: 'Left Sidebar #3',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/left-sidebar-3'
                            },
                            {
                                id   : 'user-interface.page-layouts.simple.right-sidebar-1',
                                title: 'Right Sidebar #1',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/right-sidebar-1'
                            },
                            {
                                id   : 'user-interface.page-layouts.simple.right-sidebar-2',
                                title: 'Right Sidebar #2',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/right-sidebar-2'
                            },
                            {
                                id   : 'user-interface.page-layouts.simple.right-sidebar-3',
                                title: 'Right Sidebar #3',
                                type : 'basic',
                                link : '/ui/page-layouts/simple/right-sidebar-3'
                            }
                        ]
                    }
                ]
            },
            {
                id   : 'user-interface.typography',
                title: 'Typography',
                type : 'basic',
                icon : 'heroicons_outline:pencil',
                link : '/ui/typography'
            }
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
    {
        id      : 'documentation',
        title   : 'Documentation',
        subtitle: 'Everything you need to know about Fuse',
        type    : 'group',
        icon    : 'heroicons_outline:support',
        children: [
            {
                id   : 'documentation.changelog',
                title: 'Changelog',
                type : 'basic',
                icon : 'heroicons_outline:speakerphone',
                link : '/docs/changelog',
                badge: {
                    title  : '13.6.2',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full'
                }
            },
            {
                id   : 'documentation.guides',
                title: 'Guides',
                type : 'basic',
                icon : 'heroicons_outline:book-open',
                link : '/docs/guides'
            }
        ]
    },
    {
        id  : 'divider-2',
        type: 'divider'
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation features',
        subtitle: 'Collapsable levels & badge styles',
        type    : 'group',
        icon    : 'heroicons_outline:menu',
        children: [
            {
                id      : 'navigation-features.level.0',
                title   : 'Level 0',
                icon    : 'heroicons_outline:check-circle',
                type    : 'collapsable',
                children: [
                    {
                        id      : 'navigation-features.level.0.1',
                        title   : 'Level 1',
                        type    : 'collapsable',
                        children: [
                            {
                                id      : 'navigation-features.level.0.1.2',
                                title   : 'Level 2',
                                type    : 'collapsable',
                                children: [
                                    {
                                        id      : 'navigation-features.level.0.1.2.3',
                                        title   : 'Level 3',
                                        type    : 'collapsable',
                                        children: [
                                            {
                                                id      : 'navigation-features.level.0.1.2.3.4',
                                                title   : 'Level 4',
                                                type    : 'collapsable',
                                                children: [
                                                    {
                                                        id      : 'navigation-features.level.0.1.2.3.4.5',
                                                        title   : 'Level 5',
                                                        type    : 'collapsable',
                                                        children: [
                                                            {
                                                                id   : 'navigation-features.level.0.1.2.3.4.5.6',
                                                                title: 'Level 6',
                                                                type : 'basic'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id      : 'navigation-features.level.0',
                title   : 'Level 0',
                subtitle: 'With subtitle',
                icon    : 'heroicons_outline:check-circle',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'navigation-features.level.0.1-1',
                        title: 'Level 1.1',
                        type : 'basic'
                    },
                    {
                        id   : 'navigation-features.level.0.1-2',
                        title: 'Level 1.2',
                        type : 'basic'
                    }
                ]
            },
            {
                id      : 'navigation-features.active',
                title   : 'Active item',
                subtitle: 'Manually marked as active',
                icon    : 'heroicons_outline:check-circle',
                type    : 'basic',
                active  : true
            },
            {
                id      : 'navigation-features.disabled-collapsable',
                title   : 'Disabled collapsable',
                subtitle: 'Some subtitle',
                icon    : 'heroicons_outline:check-circle',
                type    : 'collapsable',
                disabled: true,
                children: [
                    {
                        id   : 'navigation-features.disabled-collapsable.child',
                        title: 'You shouldn\'t be able to see this child',
                        type : 'basic'
                    }
                ]
            },
            {
                id      : 'navigation-features.disabled-basic',
                title   : 'Disabled basic',
                subtitle: 'Some subtitle',
                icon    : 'heroicons_outline:check-circle',
                type    : 'basic',
                disabled: true
            },
            {
                id   : 'navigation-features.badge-style-oval',
                title: 'Oval badge',
                icon : 'heroicons_outline:tag',
                type : 'basic',
                badge: {
                    title  : '8',
                    classes: 'w-5 h-5 bg-teal-400 text-black rounded-full'
                }
            },
            {
                id   : 'navigation-features.badge-style-rectangle',
                title: 'Rectangle badge',
                icon : 'heroicons_outline:tag',
                type : 'basic',
                badge: {
                    title  : 'Updated!',
                    classes: 'px-2 bg-teal-400 text-black rounded'
                }
            },
            {
                id   : 'navigation-features.badge-style-rounded',
                title: 'Rounded badge',
                icon : 'heroicons_outline:tag',
                type : 'basic',
                badge: {
                    title  : 'NEW',
                    classes: 'px-2.5 bg-teal-400 text-black rounded-full'
                }
            },
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Simple badge',
                icon : 'heroicons_outline:tag',
                type : 'basic',
                badge: {
                    title  : '87 Unread',
                    classes: 'text-teal-500'
                }
            },
            {
                id   : 'navigation-features.multi-line',
                title: 'A multi line navigation item title example which works just fine',
                icon : 'heroicons_outline:check-circle',
                type : 'basic'
            }
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        tooltip : 'Dashboards',
        type    : 'aside',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        tooltip : 'Apps',
        type    : 'aside',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        tooltip : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        tooltip : 'UI',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation',
        tooltip : 'Navigation',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'DASHBOARDS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'APPS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id   : 'others',
        title: 'OTHERS',
        type : 'group'
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation Features',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        type    : 'group',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Misc',
        type    : 'group',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
