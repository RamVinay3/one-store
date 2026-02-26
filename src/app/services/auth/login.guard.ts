import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Authservices } from "./authservices";

export const loginGuard:CanActivateFn=()=>{

    const auth=inject(Authservices),route=inject(Router);

    if(!auth.isLoggedIn())return true;
    return route.createUrlTree(['/dashboard']);
}