import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[];

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(search: string): void {
    if (search) {
      this.spotify.search(search).subscribe((data: any) => {
        this.artists = data.artists.items;
        localStorage.setItem('search', search);
      });
    }
  }
}
