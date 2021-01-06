import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  baseUrl = environment.base_url;
  getTokenUrl = environment.token_url;
  token = 'BQDbzVAcsNDJXrTQdz8l3qBIknOMF8WXb-2qbDnb5X1Q_-oQpIFpUdsMH0X7MoT2rh7b4lW3_WFw0AuUYFU';

  // Spotify
  clientId = environment.Client_ID;
  clientSecret = environment.Client_Secret;

  private getQuery(query: string): any {
    // Declaracion de los headers
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });

    // Variable para la assignation de la URL completo
    const path = `${this.baseUrl}/${query}`;

    // Petition http con la URL completa agregando los headers
    return this.http.get(path, { headers });
  }

  constructor(private http: HttpClient) {
  }

  getNewReleases(): any {
    // Obtener querycompleta
    return this.getQuery('browse/new-releases')
      .pipe(map(response => response['albums'].items));
  }

  // Segunda opcion de headers - Ponerlo directo
  /*getNewReleases(): any {
    const path = `${this.baseUrl}/new-releases`;
    return this.http.get(path, { headers: { Authorization: 'Bearer ' + this.token } });
  }*/

  search(palabra: string): any {
    return this.getQuery(`search?query=${palabra}&offset=0&limit=20&type=artist`)
      .pipe(map(res => res['artists'].items));
  }

  getArtist(id: string): any {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): any {
    return this.getQuery(`artists/${id}/top-tracks?market=MX`)
      .pipe(map(res => res['tracks']));
  }

  getToken(): any {
    // URL Completa
    const path = `${this.getTokenUrl}/${this.clientId}/${this.clientSecret}`;

    // Peticion http con la URL completa agregando el body
    return this.http.get(path).pipe(map(token => this.token = token['access_token']));
    // return null;
  }

}
