import { Component } from '@angular/core';
import { Challenge, Language, Difficulty } from 'src/app/shared/models/challenge.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Challenge[] = [
    {
      id: 1,
      name: 'QR Code Card',
      img: './assets/previews/newbie/qr-code-preview.jpg',
      description: 'A simple responsive QR code card from Frontend Mentor.',
      languages: [Language.HTML, Language.CSS],
      difficulty: Difficulty.NEWBIE,
      status: 'COMPLETED',
      url: '/qr-code'
    },
    {
      id: 2,
      name: 'Perfume Product Preview Card',
      img: './assets/previews/newbie/product-preview-card.jpg',
      description: 'Clean and responsive Gabrielle Essence Eau De Parfum preview card.',
      languages: [Language.HTML, Language.CSS],
      difficulty: Difficulty.NEWBIE,
      status: 'COMPLETED',
      url: '/product-preview-card'
    },
    {
      id: 3,
      name: 'Interactive Rating Form',
      img: './assets/previews/newbie/interactive-rating.jpg',
      description: 'A rating form with basic interactive features: select a rating, submit it, and show a confirmation. Some TS to manipulate the DOM and store the selected ranking stars.',
      languages: [Language.HTML, Language.CSS, Language.TS],
      difficulty: Difficulty.NEWBIE,
      status: 'COMPLETED',
      url: '/interactive-rating'
    },
    {
      id: 4,
      name: 'Results & Summary Test',
      img: './assets/previews/newbie/results-summary-preview.jpg',
      description: 'Insights and summary of an online test covering reaction, memory, verbal and visual abilities.',
      languages: [Language.HTML, Language.CSS],
      difficulty: Difficulty.NEWBIE,
      status: 'COMPLETED',
      url: '/results-summary'
    },
    {
      id: 5,
      name: 'NFT Preview Card',
      img: './assets/previews/newbie/nft-preview-card.jpg',
      description: 'Cool NFT card with dark mode.',
      languages: [Language.HTML, Language.CSS],
      difficulty: Difficulty.NEWBIE,
      status: 'IN PROGRESS',
      url: '/nft-preview-card'
    }
  ]
}
