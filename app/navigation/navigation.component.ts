import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-navigation',
  templateUrl: './app/navigation/navigation.component.html',
  styleUrls: ['app/navigation/navigation.component.css']
})

export class NavigationComponent {
  @Input()
  leftRouterLink: string;
  @Input()
  rightRouterLink: string;
  @Input()
  leftLinkName: string;
  @Input()
  rightLinkName: string;
  @Input()
  title: string;
}
