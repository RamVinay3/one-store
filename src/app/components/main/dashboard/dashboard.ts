import { Component } from '@angular/core';
import {  RouterOutlet, RouterLinkActive,RouterLink} from '@angular/router';
import { CurrentRoute } from '../../../services/currentRoute/current-route';
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
 
}
