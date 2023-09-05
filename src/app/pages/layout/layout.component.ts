import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `<router-outlet></router-outlet><app-footer></app-footer>`,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  
}
