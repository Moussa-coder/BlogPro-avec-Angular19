import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
// Il joue un rôle crucial dans le démarrage de l'application Angular en initialisant
// le module racine (généralement AppModule) et en "montant" (bootstrap) l'application dans le DOM.
