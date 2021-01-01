import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }

  nuevasCanciones: any[];

  ngOnInit(): void {
    localStorage.clear();
    this.spotify.getNewReleases().subscribe((releases: any) => {
      console.log(releases.albums.items);
      this.nuevasCanciones = releases.albums.items;
    });
  }

}
