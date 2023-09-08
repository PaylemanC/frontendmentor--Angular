import { Component } from '@angular/core';
import { Challenge, Difficulty, Language } from 'src/app/shared/models/challenge.model';

@Component({
  selector: 'app-product-preview-card',
  templateUrl: './product-preview-card.component.html',
  styleUrls: ['./product-preview-card.component.scss']
})
export class ProductPreviewCardComponent implements Challenge {
  id = 'GO7UmttRfa';
  name = 'Product Preview Card';
  img = './src/assets/previews/newbie/product-preview-card.jpg';
  description = 'Build a responsive product (perfume) preview card.';
  languages = [Language.HTML, Language.CSS];
  difficulty = Difficulty.NEWBIE;
  url = 'https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa';
}
