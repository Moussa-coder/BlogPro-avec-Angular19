import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

// Il joue un rôle crucial dans le démarrage de l'application Angular en initialisant
// le module racine (généralement AppModule) et en "montant" (bootstrap) l'application dans le DOM.
