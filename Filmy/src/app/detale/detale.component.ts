import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmyService } from '../filmy.service';
import { Film } from '../modele/film';


@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.css']
})
export class DetaleComponent implements OnInit {

  film = Film;

  constructor(
    private route: ActivatedRoute,
    private fs: FilmyService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id', id);
    this.film = this.fs.getFilm(Number(id));
  }

}
