import { Component, inject } from '@angular/core';
import {  RouterOutlet, RouterLinkActive,RouterLink, Router} from '@angular/router';
import { CartService } from '../../../services/cart/cart';
import { Authservices } from '../../../services/auth/authservices';
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
 cartService=inject(CartService);
 authService = inject(Authservices);
 router=inject(Router);
 logout(){
  this.authService.logout().subscribe({
      next:(res)=>{
        this.router.navigate(['auth/login']);
      },
      error:(err)=>{
        console.error(err);
      }
    });
 }
 
}
