import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[];
  tipo: string;

  constructor(private router: Router) {
    this.tipo = localStorage.getItem('type');
    // console.log(this.tipo);
  }

  ngOnInit(): void {
  }

  getArtist(item: any, index?: number): void {
    let id;
    let nameArtist;
    if (item.type === 'album') {
      id = item.artists[index].id;
      nameArtist = item.artists[index].name;
    }
    else {
      id = item.id;
      nameArtist = item.name;
    }
    console.log('Artista: ', nameArtist);
    console.log('id: ', id);
    this.router.navigate(['artist', id]);
  }

}
