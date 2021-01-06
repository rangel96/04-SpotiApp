import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artist: any;
  params: string;
  loading: boolean;
  topTracks: any[];

  constructor(
    private spotify: SpotifyService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.params = params['id'];
    });
  }

  ngOnInit(): void {
    this.getArtist(this.params);
    this.getTopArtist(this.params);
  }

  getArtist(id: string): any {
    this.spotify.getArtist(id).subscribe(artist => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopArtist(id: string): any {
    this.spotify.getTopTracks(id).subscribe(top => {
      console.log(top);
      this.topTracks = top;
    });
  }

  back(): void {
    const root = localStorage.getItem('type');
    if (root === 'search') {
      this.router.navigateByUrl('/search');
    }
    else {
      this.router.navigateByUrl('/home');
    }
  }

}
