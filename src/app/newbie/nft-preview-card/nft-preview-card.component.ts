import { Component } from '@angular/core';
import { Challenge, Language, Difficulty } from 'src/app/shared/models/challenge.model';

@Component({
  selector: 'app-nft-preview-card',
  templateUrl: './nft-preview-card.component.html',
  styleUrls: ['./nft-preview-card.component.scss']
})
export class NftPreviewCardComponent implements Challenge {
  id = 'SbdUL_w0U';
  name = 'NFT Preview Card';
  img = 'assets/design/desktop-preview.jpg';
  description = `Create an NFT preview card component. Your users should be able to:
  - View the optimal layout depending on their device's screen size
  - See hover states for interactive elements`;
  languages = [Language.HTML, Language.CSS];
  difficulty = Difficulty.NEWBIE;
  url = 'https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U';
}
