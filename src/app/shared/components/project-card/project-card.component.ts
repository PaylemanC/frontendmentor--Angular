import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Challenge, Difficulty, Language } from '../../models/challenge.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project: Challenge = {
    id: 0,
    name: '',
    img: '',
    description: '',
    languages: [Language.CSS, Language.HTML],
    difficulty: Difficulty.NEWBIE,
    status: 'IN PROGRESS',
    url: ''
  }
}
