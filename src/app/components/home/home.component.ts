import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  message: string;
  nuevasCanciones: any[];
  loading: boolean;
  error: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    localStorage.setItem('type', 'home');
  }

  ngOnInit(): void {
    localStorage.removeItem('search');
    this.getToken();
  }

  getNewReleases(): void {
    this.spotify.getNewReleases().subscribe((releases: any) => {
      // console.log(releases);
      this.nuevasCanciones = releases;
      this.loading = false;
    }, (err) => {
      console.log(err);
      this.getToken();
    });
  }

  getToken(): void {
    this.spotify.getToken().subscribe(this.getNewReleases(), (err) => {
      console.log(err);
      this.loading = false;
      this.error = true;
      this.message = err.error.error.message;
    } );
  }

}
