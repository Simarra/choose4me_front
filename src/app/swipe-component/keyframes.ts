import { keyframes, style } from '@angular/animations';

export const wobble = [
    style({ transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: .15 }),
    style({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: .30 }),
    style({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: .45 }),
    style({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: .60 }),
    style({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: .75 }),
    style({ transform: 'none', offset: 1 })
]


export const FadeOutRight = [
    style({ opacity: 1, offset: 0 }),
    style({ transform: 'translate3d(100%, 0, 0)', opacity: 0, offset: 1 }),
]

export const FadeOutLeft = [
    style({ opacity: 1, offset: 0 }),
    style({ transform: 'translate3d(-100%, 0, 0)', opacity: 0, offset: 1 }),
]

export const FadeOut = [
    style({ opacity: 1, offset: 0 }),
    style({ opacity: 0, offset: 1 }),
]

export const rotateInUpLeft = [
    style({ transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0, 'transform-origin': 'left bottom', offset: 0}),
    style({ transform: 'rotate3d(0, 0, 0)', opacity: 1, 'transform-origin': 'left bottom', offset: 1}),
]

export const rotateInDownRight = [
    style({ transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0, 'transform-origin': 'right bottom', offset: 0}),
    style({ transform: 'rotate3d(0, 0, 0)', opacity: 1, 'transform-origin': 'right bottom', offset: 1}),
]