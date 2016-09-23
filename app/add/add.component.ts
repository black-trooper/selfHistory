import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';


@Component({
  selector: 'my-add',
  templateUrl: 'app/add/add.component.html',
  styleUrls: ['app/add/add.component.css'],
  host: {
     '[@routeAnimation]': 'true',
     '[style.display]': "'block'",
     '[style.position]': "'absolute'"
  },
  animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateY(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateY(100%)'}),
        animate(200)
      ]),
      transition('* => void', animate(200, style({transform: 'translateY(100%)'})))
    ])
  ]
})

export class AddComponent {
  event: Event = new Event();
}

class Event {
  title: string;
  date: string;
}