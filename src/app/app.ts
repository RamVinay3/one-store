import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Authservices } from './services/auth/authservices';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private auth:Authservices){

  }
  protected readonly title = signal('shops');
}
