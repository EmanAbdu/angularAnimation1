import { Component, HostBinding } from '@angular/core';
import { trigger, style, state, transition, query, stagger, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAnim', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('900ms', [
          animate('600ms ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))
        ]), { optional: true }),
        query(':leave', stagger('600ms', [
          animate('600ms ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: 0, transform: 'translateY(100%)', offset: 1 }),
        ]))
        ]), {optional:true})
      ])
    ]),
    trigger('Anim', [
      transition('* => *', [
        query('h1', style({opacity:0}), {optional:true}),
        query('h1', stagger('500ms', [
           animate('600ms ease-in', keyframes([
          style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ]))
      ]), {optional:true})

      ])
    ])
  ]
})
export class AppComponent {
  @HostBinding('@.disabled') public isDisabled=false;
  title = 'Welcome to my App';
  // public isDisabled=true;

  myArr = [];
  constructor() {

    this.myArr = ['eman', 'hanan', 'hebah', 'shereen'];
  }


  addItem() {
    this.myArr.push("Zainab");
  }

  removeItem() {
    this.myArr.pop();

  }

  changeState(){

    this.isDisabled= this.isDisabled? false: true;
    console.log(this.isDisabled);
    // window.location.reload();
  }
}
