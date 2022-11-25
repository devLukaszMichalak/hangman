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

  constructor(private provider: WordsProviderService) {
  }

  ngOnInit(): void {
    this.alphabet = this.provider.getAlphabet();
  }

  getCurrentHangmanPicturePath() {
    return `assets/hangman-pictures/${this.currentHangmanPicture}.png`;
  }

  letterPressed(letter: string) {
    console.log(letter);
  }
}
