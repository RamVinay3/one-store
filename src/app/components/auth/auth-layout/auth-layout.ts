import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive,RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, RouterLinkActive,RouterLink],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout  {

 

  constructor(){}

  
}
