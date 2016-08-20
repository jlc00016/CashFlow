import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { provideRouter, RouterConfig } from '@angular/router';
import { MovementComponent } from './app/movement';
import { AboutComponent } from './app/+about';
import { LegalStuffComponent } from './app/+legal-stuff';
import { MovementEditorComponent } from './app/movement/movement-editor';
import { SecurityComponent } from './app/+security';

if (environment.production) {
  enableProdMode();
}

const appRoutes: RouterConfig = [
  { path: '', component: MovementComponent, terminal: true},
  { path: 'acerca-de', component: AboutComponent },
  { path: 'cosas-legales', component: LegalStuffComponent },
  { path: 'movimiento/:id', component: MovementEditorComponent },
  { path: 'seguridad', component: SecurityComponent },
];
const APP_ROUTES = provideRouter(appRoutes);  

bootstrap(AppComponent, [APP_ROUTES]);