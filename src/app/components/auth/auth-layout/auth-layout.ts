import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout implements OnInit {

  router=inject(Router);
  currentRoute=signal('');

  setCurrentRoute=(url:string)=>{
     const paths=url.split('/');
    this.currentRoute.set(paths[paths.length-1]);
    console.log( this.currentRoute(),'route');
  }
  ngOnInit(): void {
    
   this.setCurrentRoute(this.router.url);

  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.setCurrentRoute(this.router.url);
    });
   
  }
}
