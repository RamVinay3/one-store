import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Authservices } from './services/auth/authservices';
import { LoadingSpinner } from "./components/shared/spinner/loading-spinner/loading-spinner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingSpinner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit{



  constructor(private auth:Authservices, private router:Router){

  }

  ngOnInit(): void {
    this.auth.loadCurrentUser().subscribe({
      next: (res) => {
       
       
         this.router.navigate(['/dashboard'], { replaceUrl: true });
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  protected readonly title = signal('shops');
}
