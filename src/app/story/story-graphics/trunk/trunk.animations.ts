import { trigger, transition, animate, style, state } from '@angular/animations'

export const animations = [
    trigger('body', [
        state('normal', style({
            transform: 'scale(1)'
        })),
        state('hover', style({
            transform: 'scale(1.1)'
        })),
        transition('normal => hover', [
            animate(300, style({
                transform: 'scale(1.1)'
            }))
        ]),
        transition('hover => normal', [
            animate(300, style({
                transform: 'scale(1)',
            }))
        ])
    ])
]