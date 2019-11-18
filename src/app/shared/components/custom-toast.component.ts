import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component } from '@angular/core';
import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';

@Component({
  selector: '[custom-toast-component]',
  styles: [
    `
      :host {
        background-color: #1e283a;
        position: relative;
        overflow: hidden;
        margin: 0 0 30px;
        padding: 10px;
        width: 300px;
        border-radius: 3px;
        color: #ffffff;
        pointer-events: all;
        cursor: pointer;
      }
      .btn-pink {
        -webkit-backface-visibility: hidden;
        -webkit-transform: translateZ(0);
      }
    `
  ],
  template: `
    <div class="row" [style.display]="state.value === 'inactive' ? 'none' : ''">
      <div class="col-9">
        <div
          *ngIf="title"
          [class]="options.titleClass"
          [attr.aria-label]="title"
        >
          {{ title }}
        </div>
        <div
          *ngIf="message && options.enableHtml"
          role="alert"
          aria-live="polite"
          [class]="options.messageClass"
          [innerHTML]="message"
        ></div>
        <div
          *ngIf="message && !options.enableHtml"
          role="alert"
          aria-live="polite"
          [class]="options.messageClass"
          [attr.aria-label]="message"
        >
          {{ message }}
        </div>
      </div>
    </div>
    <div *ngIf="options.progressBar">
      <div class="toast-progress" [style.width]="width + '%'"></div>
    </div>
  `,
  animations: [
    trigger('flyInOut', [
      state(
        'inactive',
        style({
          opacity: 0
        })
      ),
      transition(
        'inactive => active',
        animate(
          '400ms ease-out',
          keyframes([
            style({
              transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
              opacity: 0
            }),
            style({
              transform: 'skewX(20deg)',
              opacity: 1
            }),
            style({
              transform: 'skewX(-5deg)',
              opacity: 1
            }),
            style({
              transform: 'none',
              opacity: 1
            })
          ])
        )
      ),
      transition(
        'active => removed',
        animate(
          '400ms ease-out',
          keyframes([
            style({
              opacity: 1
            }),
            style({
              transform: 'translate3d(100%, 0, 0) skewX(30deg)',
              opacity: 0
            })
          ])
        )
      )
    ])
  ],
  preserveWhitespaces: false
})
export class CustomToastComponent extends Toast {
  // constructor is only necessary when not using AoT
  constructor(
    protected toastrService: ToastrService,
    public toastPackage: ToastPackage
  ) {
    super(toastrService, toastPackage);
  }

  action(event: Event) {
    event.stopPropagation();
    this.toastPackage.triggerAction();
    return false;
  }
}
