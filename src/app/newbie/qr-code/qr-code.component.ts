import { Component } from '@angular/core';
import { Challenge, Difficulty, Language, Status } from 'src/app/shared/models/challenge.model';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements Challenge {
  id = 'iux_sIO_H';
  name = 'QR Code';
  img = './src/assets/previews/newbie/qr-code-preview.jpg';
  description = 'Build the Frontend QR Code card.';
  languages = [Language.HTML, Language.CSS];
  difficulty = Difficulty.NEWBIE;
  url = 'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H'
}
