import { inject, Injectable, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentRoute {
  router = inject(Router);
  currentRoute = signal('');

  setCurrentRoute = (url: string) => {
    const paths = url.split('/');
    this.currentRoute.set(paths[paths.length - 1]);
    console.log(this.currentRoute(), 'route');
  };
  constructor() {
    this.setCurrentRoute(this.router.url);

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.setCurrentRoute(this.router.url);
    });
  }
}
