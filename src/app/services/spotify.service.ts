import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  baseUrl = environment.base_url;
  token = 'BQDzrnPC_rW1--RsEZ00H5I75z9bCjxdLF-3EoRwXmYQxawjX8XYt0CVteo7HVAFI5_XS0eBb64cyLBtTJw';

  // Spotify
  clientId = environment.Client_ID;
  clientSecret = environment.Client_Secret;
  grantType = environment.Grant_Type;

  constructor(private http: HttpClient) {  }

  getNewReleases(): any {
    // Declaracion de los headers
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });

    // URL Completo
    const path = `${this.baseUrl}/browse/new-releases`;

    // Peticion http con la URL completa agregando los headers
    return this.http.get(path, { headers });
  }

  // Segunda opcion de headers - Ponerlo directo
  /*getNewReleases(): any {
    const path = `${this.baseUrl}/new-releases`;
    return this.http.get(path, { headers: { Authorization: 'Bearer ' + this.token } });
  }*/

  search(palabra: string): any {
    // Declaracion de los headers
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });

    // URL Completo
    const path = `${this.baseUrl}/search?query=${palabra}&offset=0&limit=20&type=artist`;

    // Peticion http con la URL completa agregando los headers
    return this.http.get(path, { headers });
  }

  getToken(): any {
    // Body por x-www-form-urlecoded
    const headers = new HttpHeaders({ content_type: 'application/x-www-form-urlencoded' });
    const body = {
      grant_type: this.grantType,
      client_id: this.clientId,
      client_secret: this.clientSecret,
    };

    // URL Completa
    const path = `https://accounts.spotify.com/api/token?grant_type`;

    // Peticion http con la URL completa agregando el body
    return this.http.post(path, body, { headers });
    // return null;
  }

}
