import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<main><app-module-card></app-module-card></main><app-footer></app-footer>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontendmentor';
}
