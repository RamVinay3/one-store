import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authservices } from '../services/auth/authservices';

export const authGuard:CanActivateFn=()=>{

    const auth=inject(Authservices),route=inject(Router);

    if(auth.isLoggedIn())return true;


    return route.createUrlTree(['/auth/login']);
}