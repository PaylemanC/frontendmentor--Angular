import { Component } from '@angular/core';

@Component({
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.scss']
})
export class ModuleCardComponent {
  difficulties = [ //Intermediate, Advanced, Guru
    {
      'name': 'Newbie',
      'color': '#f6e6a8'
    },
    {
      'name': 'Junior',
      'color': '#aceb97'
    }
  ]
}
