import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsProviderService {

  private readonly vegetables = [
    'rukola',
    'szparag',
    'bakłażan',
    'bazylia',
    'fasola',
    'burak',
    'brokuł',
    'kapusta',
    'marchew',
    'kalafior',
    'seler',
    'szczypior',
    'kukurydza',
    'rzeżucha',
    'ogórek',
    'koper',
    'bakłażan',
    'czosnek',
    'imbir',
    'jarmuż',
    'kalarepa',
    'por',
    'soczewica',
    'sałata',
    'cebula',
    'pietruszka',
    'groch',
    'papryka',
    'ziemniak',
    'dynia',
    'rzodkiewka',
    'rabarbar',
    'szpinak',
    'pomidor',
    'rzepa',
    'cukinia'];

  private readonly fruits = ['agrest',
    'ananas',
    'arbuz',
    'aronia',
    'awokado',
    'banan',
    'borówka',
    'brzoskwinia',
    'cytryna',
    'czereśnia',
    'daktyl',
    'durian',
    'figa',
    'granat',
    'grejpfrut',
    'gruszka',
    'jabłko',
    'jeżyna',
    'kiwi',
    'liczi',
    'malina',
    'mandarynka',
    'mango',
    'marakuja',
    'melon',
    'mirabelka',
    'morela',
    'nektarynka',
    'papaja',
    'pigwa',
    'pomarańcza',
    'śliwka',
    'truskawka',
    'winogrono',
    'wiśnia',
    'żurawina'];

  private readonly animals = [
    'aligator',
    'mrówka',
    'antylopa',
    'pawian',
    'borsuk',
    'nietoperz',
    'niedźwiedź',
    'bóbr',
    'pszczoła',
    'żuk',
    'chrząszcz',
    'ptak',
    'bizon',
    'ryś',
    'bizon',
    'bawół',
    'trzmiel',
    'motyl',
    'wielbłąd',
    'kot',
    'gąsienica',
    'sum',
    'stonoga',
    'kameleon',
    'gepard',
    'kura',
    'karaluch',
    'puma',
    'krowa',
    'kojot',
    'krokodyl',
    'orzeł',
    'słoń',
    'sokół',
    'ryba',
    'mucha',
    'lis',
    'żaba',
    'żyrafa',
    'koza',
    'gęś',
    'goryl',
    'chomik',
    'koń',
    'koliber',
    'hiena',
    'jaguar',
    'meduza',
    'kangur',
    'koala',
    'biedronka',
    'lampart',
    'lew',
    'jaszczurka',
    'lama',
    'ryś',
    'surykatka',
    'kret',
    'małpa',
    'łoś',
    'mysz',
    'muł',
    'słowik',
    'opos',
    'struś',
    'sowa',
    'pantera',
    'papuga',
    'paw',
    'pelikan',
    'pingwin',
    'świnia',
    'krewetka',
    'puma',
    'królik',
    'szop pracz',
    'szczur',
    'grzechotnik',
    'renifer',
    'foka',
    'owca',
    'skunks',
    'ślimak',
    'wąż',
    'wróbel',
    'wiewiórka',
    'łabędź',
    'tygrys',
    'żółw',
    'indyk',
    'mors',
    'wilk',
    'dzięcioł',
    'zebra'];

  private readonly states = [
    'dolnośląskie',
    'kujawskopomorskie',
    'lubelskie',
    'lubuskie',
    'łódzkie',
    'małopolskie',
    'mazowieckie',
    'opolskie',
    'podkarpackie',
    'podlaskie',
    'pomorskie',
    'śląskie',
    'świętokrzyskie',
    'warmińskomazurskie',
    'wielkopolskie',
    'zachodniopomorskie'];

  private readonly cities = [
    'Warszawa',
    'Kraków',
    'Łódź',
    'Wrocław',
    'Poznań',
    'Gdańsk',
    'Szczecin',
    'Bydgoszcz',
    'Lublin',
    'Białystok',
    'Katowice',
    'Gdynia',
    'Częstochowa',
    'Radom',
    'Sosnowiec',
    'Toruń',
    'Kalisz',
    'Opatówek'];

  private readonly carBrands = [
    'Toyota',
    'Honda',
    'Ford',
    'MercedesBenz',
    'BMW',
    'Porsche',
    'Audi',
    'Ferrari',
    'Jaguar',
    'Tesla',
    'Mitsubishi',
    'Fiat',
    'AlfaRomeo',
    'Suzuki',
    'Renault',
    'Citroen',
  ];

  private readonly alphabet = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U', 'W', 'Y', 'Z', 'Ź', 'Ż'];

  getVegetables = (): string[] => this.vegetables;
  getFruits = (): string[] => this.fruits;
  getAnimals = (): string[] => this.animals;
  getStates = (): string[] => this.states;
  getCities = (): string[] => this.cities;
  getCarBrands = (): string[] => this.carBrands;
  getAlphabet = (): string[] => this.alphabet;
}
