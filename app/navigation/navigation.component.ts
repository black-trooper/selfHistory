import { Component } from '@angular/core';

@Component({
  selector: 'my-navigation',
  templateUrl: './app/navigation/navigation.component.html',
  styleUrls: ['app/navigation/navigation.component.css']
})

export class NavigationComponent {
  private isCollapsed = true;
}
