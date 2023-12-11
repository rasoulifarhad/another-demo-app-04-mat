import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard = () => {

  const authService = inject(AuthService)
  const router = inject(Router);

  console.log('authGuard#canActivate called');

  if(authService.isLoggedIn()) {
    return true;
  }
  return router.parseUrl('/');
  // router.navigate(['/']);
  // return false;
};
