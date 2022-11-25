import {Component, Input, OnInit} from '@angular/core';
import {WordsProviderService} from "../../services/words-provider/words-provider.service";
import {Categories} from "../../services/enums/categories";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  @Input()
  category?: Categories;

  currentHangmanPicture: number = 10;
  alphabet: string[] = [];
  phrase: string[] = ['t','e','s','t']
  phraseLettersGuessed: boolean[] = [false, false, false, false]

  constructor(private provider: WordsProviderService) {
  }

  ngOnInit(): void {
    this.alphabet = this.provider.getAlphabet();
  }

  getCurrentHangmanPicturePath() {
    return `assets/hangman-pictures/${this.currentHangmanPicture}.png`;
  }

  letterPressed(letter: string) {
    this.phrase.forEach((phraseLetter, i) => {
      if(phraseLetter === letter.toLowerCase()){
        this.phraseLettersGuessed[i] = true;
      }
    })
  }
}
