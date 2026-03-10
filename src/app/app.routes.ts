import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Dashboard } from './components/main/dashboard/dashboard';
import { Products } from './components/main/products/products';
import { Cart } from './components/main/cart/cart';
import { Review } from './components/main/review/review';
import { loginGuard } from './utils/login.guard';
import { authGuard } from './utils/auth.guard';
import { Signup } from './components/auth/signup/signup';
import { AuthLayout } from './components/auth/auth-layout/auth-layout';
import { Profile } from './components/main/profile/profile';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayout,
    canActivate: [loginGuard],
    children: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'signup',
        component: Signup,
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
    children: [
      {
        path: 'products',
        component: Products,
      },
      {
        path: 'cart',
        component: Cart,
      },
      {
        path:'profile',
        component:Profile
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'products',
      }
    ],
  },
  {
    path: 'review',
    component: Review,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'signup' },
];
