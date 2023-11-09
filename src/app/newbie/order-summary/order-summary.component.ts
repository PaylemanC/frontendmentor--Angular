import { Component } from '@angular/core';
import { Challenge, Language, Difficulty } from 'src/app/shared/models/challenge.model';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements Challenge {
  id = 'QlPmajDUj';
  name = 'Order Summary';
  img = 'design/desktop-preview.jpg';
  description = `Create an order summary card component. Your users should be able to:
  - See hover states for interactive elements.`;
  languages = [Language.HTML, Language.CSS];
  difficulty = Difficulty.NEWBIE;
  url = 'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj';
}
