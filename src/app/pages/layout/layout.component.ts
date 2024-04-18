import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `<div class="layout-container"><router-outlet></router-outlet><app-footer></app-footer></div>`,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  
}
