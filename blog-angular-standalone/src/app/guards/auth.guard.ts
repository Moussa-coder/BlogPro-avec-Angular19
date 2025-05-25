import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = false; // À remplacer avec AuthService plus tard
  return isLoggedIn;
};
