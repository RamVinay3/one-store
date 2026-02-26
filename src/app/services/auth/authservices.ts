import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Authservices {
  isLoggedIn=signal(false);
  
  constructor(){
    const token=localStorage.getItem('jwt');
    console.log(token);
    if(token==null)this.isLoggedIn.set(false);
    else this.isLoggedIn.set(true);
  }

  login() {
    this.isLoggedIn.set(true);
  }

  logout() {
    this.isLoggedIn.set(false);
  }
}
