import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  error: boolean;
  message: string;
  artists: any[];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    localStorage.setItem('type', 'search');
    const find = localStorage.getItem('search');

    if (find) {
      this.buscar(find);
    }
  }

  ngOnInit(): void {
  }

  buscar(search: string): void {
    if (search) {
      this.loading = true;
      this.spotify.search(search).subscribe((data: any) => {
        this.artists = data;
        localStorage.setItem('search', search);
        this.loading = false;
      }, (err) => {
        console.log(err);
        this.getToken();
      });
    } else {
      this.loading = false;
    }
  }

  clear(): void{
    localStorage.removeItem('search');
    this.artists = null;
  }

  private getToken(): void {
    this.spotify.getToken().subscribe( null, (err) => {
      console.log(err);
      this.loading = false;
      this.error = true;
      this.message = err.error.error.message;
    } );
  }
}
