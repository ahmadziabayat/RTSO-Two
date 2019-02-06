import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { ResizeEvent } from 'angular-resizable-element';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent {
  title = 'RTSO-Two';

  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
  }

}
