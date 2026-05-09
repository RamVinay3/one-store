import { inject, Injectable, signal } from '@angular/core';
import { HttpService } from '../api/api';
import { API_END_POINT } from '../../../globalConstants';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authservices {
  httpServices = inject(HttpService);
  router = inject(Router);
  isLoggedIn = signal(false);

  constructor() {}

  loadCurrentUser() {
    return this.httpServices.get(API_END_POINT.IS_AUTHORISED).pipe(
      tap((res)=>{
         this.isLoggedIn.set(true);
      })
    )
    
    
    
    
  }
  login(formValues: any) {
    const { email, password } = formValues; //this.loginForm.value;

    const payload = {
      email,
      password
    };
    return this.httpServices.post(API_END_POINT.LOGIN, payload).pipe(
      tap((res)=>{
        //console.log(res,"response from tap");
        this.isLoggedIn.set(true);
      })
    );
  }

  logout() {

    return this.httpServices.get(API_END_POINT.LOGOUT).pipe(
      tap((res)=>{
       // console.log(res,"from tap");
         this.isLoggedIn.set(false);
      })
    );
    
  }
}
