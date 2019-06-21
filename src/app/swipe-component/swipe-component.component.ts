import { Component, OnInit } from '@angular/core';
import { trigger, keyframes, transition, animate } from '@angular/animations';
import * as kf from './keyframes';

@Component({
  selector: 'app-swipe-component',
  templateUrl: './swipe-component.component.html',
  styleUrls: ['./swipe-component.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => FadeOutRight', animate(1000, keyframes(kf.FadeOutRight))),
      transition('* => FadeOutLeft', animate(1000, keyframes(kf.FadeOutLeft))),
      transition('* => FadeOut', animate(1000, keyframes(kf.FadeOut))),
      transition('* => rotateInUpLeft', animate(1000, keyframes(kf.rotateInUpLeft))),
      transition('* => rotateInDownRight', animate(1000, keyframes(kf.rotateInDownRight))),

    ])
  ]
})
export class SwipeComponent implements OnInit {
  animationState: string;

  startAnimation(state) {
    console.log(state)
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
