import { Component, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector     : 'animations',
    templateUrl  : './animations.component.html',
    styleUrls    : ['./animations.component.scss'],
    animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class AnimationsComponent
{
    animationStates: any;
    visibilityStates: any;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.animationStates = {
            expandCollapse: 'expanded',
            fadeIn        : {
                direction: 'in',
                in       : '*',
                top      : '*',
                bottom   : '*',
                left     : '*',
                right    : '*'
            },
            fadeOut       : {
                direction: 'out',
                out      : '*',
                top      : '*',
                bottom   : '*',
                left     : '*',
                right    : '*'
            },
            shake         : {
                shake: true
            },
            slideIn       : {
                direction: 'top',
                top      : '*',
                bottom   : '*',
                left     : '*',
                right    : '*'
            },
            slideOut      : {
                direction: 'top',
                top      : '*',
                bottom   : '*',
                left     : '*',
                right    : '*'
            },
            zoomIn        : {
                in: '*'
            },
            zoomOut       : {
                out: '*'
            }
        };

        this.visibilityStates = {
            expandCollapse: true,
            fadeIn        : {
                in    : true,
                top   : true,
                bottom: true,
                left  : true,
                right : true
            },
            fadeOut       : {
                out   : true,
                top   : true,
                bottom: true,
                left  : true,
                right : true
            },
            shake         : {
                shake: true
            },
            slideIn       : {
                top   : true,
                bottom: true,
                left  : true,
                right : true
            },
            slideOut      : {
                top   : true,
                bottom: true,
                left  : true,
                right : true
            },
            zoomIn        : {
                in: true
            },
            zoomOut       : {
                out: true
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle animation state
     *
     * @param animation
     * @param firstState
     * @param secondState
     * @param timeout
     */
    toggleAnimationState(animation: string, firstState: string | boolean, secondState: string | boolean, timeout: number = 500): void
    {
        // Split the animation
        const animationPath = animation.split('.');

        // Toggle the animation state
        this.animationStates[animationPath[0]][animationPath[1]] = firstState;

        setTimeout(() => {
            this.animationStates[animationPath[0]][animationPath[1]] = secondState;
        }, timeout);
    }

    /**
     * Toggle visibility state
     *
     * @param animation
     * @param timeout
     */
    toggleVisibilityState(animation: string, timeout: number = 500): void
    {
        // Split the animation
        const animationPath = animation.split('.');

        // Toggle the visibility status
        this.visibilityStates[animationPath[0]][animationPath[1]] = false;
        this.animationStates[animationPath[0]][animationPath[1]] = 'void';

        setTimeout(() => {
            this.visibilityStates[animationPath[0]][animationPath[1]] = true;
            this.animationStates[animationPath[0]][animationPath[1]] = '*';
        }, timeout);
    }

}
