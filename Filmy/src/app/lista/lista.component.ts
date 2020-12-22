import { Component, OnInit } from '@angular/core';
import { FilmyService } from '../filmy.service';
import { Film } from '../modele/film';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  filmy: Film[] = [];

  constructor(private fS: FilmyService) {

  }

  ngOnInit(): void {
    this.fS.wszystkieFilmy().subscribe(
      (dane) => {
        this.filmy = dane
      },
      (error) => {
        console.log(error);
      });
    console.table(this.filmy);
  }

}
