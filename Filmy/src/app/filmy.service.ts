import { Injectable } from '@angular/core';
import { Film } from './modele/film';


@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [
    { id: 0, tytul: 'Grand Budapest Hotel', opis: 'Film "Grand Budapest Hotel" opowiada o przygodach Gustava H., legendarnego konsjerża w słynnym, w okresie międzywojennym, europejskim hotelu i Zero Moustafy, lobby boya, który stał się jego najbardziej zaufanym przyjacielem. Historia dotyczy kradzieży i odzyskania bezcennego renesansowego obrazu; szalonej batalii o ogromny, rodzinny majątek, okraszonej brawurowymi pościgami na motocyklach, pociągami, saniami i na nartach; a także najsłodszego z romansów - wszystko w przededniu dramatycznych zmian, które odcisną brutalne piętno na całym kontynencie.' },
    { id: 1, tytul: 'The Social Network', opis: 'Reż. David Fincher, USA. "Social Network" to film, który jest symbolem tej dekady, to lata 2010- w pigułce. Obraz Finchera o Marku Zuckerbergu, twórcy Facebooka, to nie tylko biografia nieprzystowanego do życia geniusza, ale przede wszystkim spojrzenie na współczesne społeczeństwo, które ucieka w internetowe awatary. Bez "Social Network" kino tej dekady nie byłoby takie samo. Tak się robi filmy.' },
    { id: 3, tytul: 'Moonlight', opis: 'Reż. Barry Jenkins, USA. Małe arcydzieło. Film, który mógł być typową produkcją o "szukaniu siebie" z motywami LGBT na pierwszym planie, ale stał się przepiękną, poruszającą i mądrą historią o życiu. Estetycznie doskonały, wspaniale zagrany, uniwersalny. To nie jest – jak twierdzą złośliwi – film, który jest dobry tylko dlatego, bo opowiada o "czarnym geju". To film, który jest dobry, bo jest... po prostu do bólu dobry.' },
  ];

  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }
  getFilm(id: number): Film {
    return this.filmy[id];
  }
}
