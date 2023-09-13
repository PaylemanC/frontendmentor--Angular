import { Component } from '@angular/core';
import { Challenge, Difficulty, Language, Status } from 'src/app/shared/models/challenge.model';

@Component({
  selector: 'app-results-summary',
  templateUrl: './results-summary.component.html',
  styleUrls: ['./results-summary.component.scss']
})
export class ResultsSummaryComponent implements Challenge {
  id = 'CE_K6s0maV';
  name = 'Results Summary';
  img = './src/assets/previews/newbie/results-summary-preview.jpg';
  description = `Build out this results summary card component. Your users should be able to:
  - View the optimal layout for the interface depending on their device's screen size
  - See hover and focus states for all interactive elements on the page
  - Bonus: Use data to dynamically populate the content`;
  languages = [Language.HTML, Language.CSS, Language.TS];
  difficulty = Difficulty.NEWBIE;
  status: Status = 'IN PROGRESS';
  url = 'https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV'

  data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]

}
