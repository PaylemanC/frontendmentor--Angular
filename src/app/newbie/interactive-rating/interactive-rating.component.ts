import { Component } from '@angular/core';
import { Challenge,  Difficulty, Language, Status } from 'src/app/shared/models/challenge.model';

@Component({
  selector: 'app-interactive-rating',
  templateUrl: './interactive-rating.component.html',
  styleUrls: ['./interactive-rating.component.scss']
})
export class InteractiveRatingComponent implements Challenge {
  id = 'koxpeBUmI';
  name = 'Interactive Rating';
  img = 'assets/img/interactive-rating.png';
  description = `Create a rating component that allows users to rate a product/service from 1 to 5 stars.
    Your users should be able to:
    - View the optimal layout for the app depending on their device's screen size
    - See hover states for all interactive elements on the page
    - Select and submit a number rating
    - See the "Thank you" card state after submitting a rating`;
  languages = [Language.HTML, Language.CSS, Language.TS];
  difficulty = Difficulty.NEWBIE;
  status: Status = 'IN PROGRESS';
  url = 'https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI';

  selected: number = 0;
  active: boolean = false;
  isButtonDisabled = true;

  onSubmit(e: Event) {
    e.preventDefault();
    this.active = true;
  }

  selectedRating(value: number) {
    this.selected = value;
    this.isButtonDisabled = false;
  }
}
