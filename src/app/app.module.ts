// Module - Modulos a utilizar
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/*** Routing - Rutas de los diferentes componentes
 * * Importar rutas*/
import { APP_ROUTING } from './app-routing.module';

// HttpClient para conectar a una REST API
import { HttpClientModule } from '@angular/common/http';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';

// Component - Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ErrorComponent } from './components/shared/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    DomSeguroPipe,
    TarjetasComponent,
    LoadingComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule, APP_ROUTING, HttpClientModule, FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
