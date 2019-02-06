import {ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent  {

  items = [
    {
      title: 'Profile',
      icon: 'nb-gear',
      expanded: true,
      children: [
        {
          title: 'Change Password',
          icon: 'nb-keypad',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Privacy Policy',
          icon: 'nb-tables',
          ulr: '#', // goes directly into `href` attribute
        },
        {
          title: 'Logout',
          icon: 'nb-layout-default',
          link: [],
        },
      ],
    },
    {
      title: 'Shopping Bag',
      icon: 'nb-location',
      expanded: true,
      children: [
        {
          title: 'Change Password',
          icon: 'nb-keypad',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Privacy Policy',
          icon: 'nb-tables',
          ulr: '#', // goes directly into `href` attribute
        },
        {
          title: 'Logout',
          icon: 'nb-layout-default',
          link: [],
        },
      ],
    },
    {
      title: 'Orders',
      icon: 'nb-bar-chart',
      link: [],
    },
  ];




}
