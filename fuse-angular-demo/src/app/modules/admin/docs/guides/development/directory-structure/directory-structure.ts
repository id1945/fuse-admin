import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { GuidesComponent } from 'app/modules/admin/docs/guides/guides.component';

interface DirNode
{
    name: string;
    expandable?: boolean;
    level?: number;
    last?: boolean;
    children?: DirNode[];
}

interface FlatDirNode
{
    name: string;
    expandable: boolean;
    level: number;
    last: boolean;
}

@Component({
    selector     : 'directory-structure',
    templateUrl  : './directory-structure.html',
    styles       : [
        `
            directory-structure .mat-tree {
                font-family: "IBM Plex Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            }

            directory-structure .mat-tree-node {
                min-height: 32px;
            }

            directory-structure .mat-tree .mat-icon-button {
                width: 32px;
                height: 32px;
                min-height: 32px;
                line-height: 32px;
                margin-right: 8px;
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class DirectoryStructureComponent implements OnInit
{
    appDir: any;
    appTree: any;
    generalDir: any;
    generalTree: any;

    /**
     * Constructor
     */
    constructor(private _guidesComponent: GuidesComponent)
    {
        // App dir
        this.appDir = [
            {
                name    : 'app/',
                children: [
                    {
                        name    : 'core/',
                        children: [
                            {name: 'auth/'},
                            {name: 'config/'},
                            {name: 'user/'},
                            {name: 'core.module.ts'}
                        ]
                    },
                    {
                        name    : 'layout/',
                        children: [
                            {name: 'common/'},
                            {name: 'layouts/'},
                            {name: 'layout.component.html'},
                            {name: 'layout.component.scss'},
                            {name: 'layout.component.ts'},
                            {name: 'layout.module.ts'},
                            {name: 'layout.types.ts'}
                        ]
                    },
                    {
                        name    : 'mock-api/',
                        children: [
                            {name: 'apps/'},
                            {name: 'common/'},
                            {name: 'dashboards/'},
                            {name: 'pages/'},
                            {name: 'ui/'},
                            {name: 'index.ts'}
                        ]
                    },
                    {
                        name    : 'modules/',
                        children: [
                            {name: 'admin/'},
                            {name: 'auth/'},
                            {name: 'landing/'}
                        ]
                    },
                    {
                        name    : 'shared/',
                        children: [
                            {name: 'shared.module.ts'}
                        ]
                    },
                    {name: 'app.component.html'},
                    {name: 'app.component.scss'},
                    {name: 'app.component.ts'},
                    {name: 'app.module.ts'},
                    {name: 'app.resolvers.ts'},
                    {name: 'app.routing.ts'},
                    {name: 'app.types.ts'}
                ]
            }
        ];

        // General dir
        this.generalDir = [
            {
                name    : 'src/',
                children: [
                    {
                        name    : '@fuse/',
                        children: [
                            {name: 'animations/'},
                            {name: 'components/'},
                            {name: 'directives/'},
                            {name: 'lib/'},
                            {name: 'pipes/'},
                            {name: 'services/'},
                            {name: 'styles/'},
                            {name: 'tailwind/'},
                            {name: 'validators/'},
                            {name: 'version/'},
                            {name: 'index.ts'},
                            {name: 'fuse.module.ts'}
                        ]
                    },
                    this.appDir[0],
                    {
                        name    : 'assets/',
                        children: [
                            {name: 'fonts/'},
                            {name: 'icons/'},
                            {name: 'images/'},
                            {name: 'styles/'}
                        ]
                    },
                    {
                        name    : 'environments/',
                        children: [
                            {name: 'environment.prod.ts'},
                            {name: 'environment.ts'}
                        ]
                    },
                    {
                        name    : 'styles/',
                        children: [
                            {name: 'styles.scss'},
                            {name: 'tailwind.scss'},
                            {name: 'vendors.scss'}
                        ]
                    },
                    {name: 'favicon-16x16.png'},
                    {name: 'favicon-32x32.png'},
                    {name: 'global.d.ts'},
                    {name: 'index.html'},
                    {name: 'main.ts'},
                    {name: 'polyfills.ts'},
                    {name: 'test.ts'}
                ]
            }
        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.appTree = this.createTree(this.appDir);
        this.generalTree = this.createTree(this.generalDir);

        // Add 'last:true' to the last child
        this.appTree.treeControl.dataNodes.forEach((node: FlatDirNode, index, nodes) => {
            nodes[index].last = false;
            if ( nodes[index + 1] )
            {
                nodes[index].last = nodes[index + 1].level === node.level - 1;
            }
            else
            {
                nodes[index].last = true;
            }
        });

        this.generalTree.treeControl.dataNodes.forEach((node: FlatDirNode, index, nodes) => {
            nodes[index].last = false;
            if ( nodes[index + 1] )
            {
                nodes[index].last = nodes[index + 1].level === node.level - 1;
            }
            else
            {
                nodes[index].last = true;
            }
        });

        // Expand the first item
        this.appTree.treeControl.expand(this.appTree.treeControl.dataNodes[0]);
        this.generalTree.treeControl.expand(this.generalTree.treeControl.dataNodes[0]);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Has child
     *
     * @param _
     * @param node
     */
    hasChild(_: number, node: DirNode): boolean
    {
        return node.expandable;
    }

    /**
     * Create a new tree
     */
    createTree(data): { dataSource: any; treeControl: any }
    {
        // Create tree control and data source
        const treeControl = new FlatTreeControl<FlatDirNode>(node => node.level, node => node.expandable);
        const dataSource = new MatTreeFlatDataSource(
            treeControl,
            new MatTreeFlattener(
                (node: DirNode, level: number) => ({
                    expandable: !!node.children && node.children.length > 0,
                    name      : node.name,
                    level     : level
                }),
                node => node.level, node => node.expandable, node => node.children)
        );

        // Set the data
        dataSource.data = data;

        return {
            treeControl,
            dataSource
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._guidesComponent.matDrawer.toggle();
    }
}
