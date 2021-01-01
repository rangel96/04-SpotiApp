// Module - Modulos a utilizar
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*** Routing - Rutas de los diferentes componentes
 * * Importar rutas*/
import { APP_ROUTING } from './app-routing.module';

// HttpClient para conectar a una REST API
import { HttpClientModule } from '@angular/common/http';

// Component - Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, APP_ROUTING, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
