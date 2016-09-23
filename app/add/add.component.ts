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
     '[style.position]': "'absolute'",
     '[style.width]': "'100%'"
  },
  animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(200)
      ]),
      transition('* => void', animate(200, style({transform: 'translateX(100%)'})))
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