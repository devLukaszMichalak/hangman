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

  wordList: string[] = [];
  alreadyUsedIndexes: number[] = [];
  currentWordIndex?: number;
  currentHangmanPicture: number = 0;
  alphabet: string[] = [];
  phrase: string[] = ['T', 'E', 'S', 'T']
  defeat: boolean = false;
  phraseLettersGuessed: boolean[] = [false, false, false, false]

  private readonly LAST_IMAGE_INDEX: number = 11;

  constructor(private provider: WordsProviderService) {
  }

  ngOnInit(): void {
    this.alphabet = this.provider.getAlphabet();
    switch (this.category) {
      case Categories.ANIMALS:
        this.wordList = this.provider.getAnimals();
        break;
      case Categories.FRUITS:
        this.wordList = this.provider.getFruits();
        break;
      case Categories.VEGETABLES:
        this.wordList = this.provider.getVegetables();
        break;
      case Categories.STATES:
        this.wordList = this.provider.getStates();
        break;
      case Categories.CITIES:
        this.wordList = this.provider.getCities();
        break;
      case Categories.CAR_BRANDS:
        this.wordList = this.provider.getCarBrands();
        break;
    }
    this.prepareGame();
  }

  getCurrentHangmanPicturePath() {
    return `assets/hangman-pictures/${this.currentHangmanPicture}.png`;
  }

  letterPressed(letter: string) {
    (document.getElementById(letter) as any).disabled = true;

    let didUserGuessCorrectly = false;
    this.phrase.forEach((phraseLetter, i) => {
      if (phraseLetter === letter) {
        this.phraseLettersGuessed[i] = true;
        didUserGuessCorrectly = true;
      }
    })
    if (!didUserGuessCorrectly) {
      this.currentHangmanPicture++;
      if (this.currentHangmanPicture === this.LAST_IMAGE_INDEX) {
        this.phraseLettersGuessed = Array(this.phrase.length).fill(true);
        this.defeat = true;
      }
    }
  }

  private stringToCharArr(word: string): string[] {
    return [...word];
  }

  private getCurrentWordIndex(): number {
    const index = Math.round(this.wordList.length * Math.random());
    if (this.alreadyUsedIndexes.includes(index)) {
      if (this.alreadyUsedIndexes.length === this.wordList.length) {
        this.alreadyUsedIndexes = [];
      }
      return this.getCurrentWordIndex();
    } else {
      return index;
    }
  }

  prepareGame(): void {
    this.defeat = false;
    this.currentHangmanPicture = 0;

    this.currentWordIndex = this.getCurrentWordIndex();
    this.alreadyUsedIndexes.push(this.currentWordIndex);

    this.phrase = this.stringToCharArr(this.wordList[this.currentWordIndex].toUpperCase());
    this.phraseLettersGuessed = Array(this.phrase.length).fill(false);
  }
}
