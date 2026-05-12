import { Component, inject, OnInit, signal } from '@angular/core';
import { Authservices } from '../../../services/auth/authservices';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit{
  userProfile = signal({
    firstName: 'vinay',
    lastName: 'Ram',
    email: 'abc@example.com',
    mobile: '+91 98765 43210',
  });
  profile=this.userProfile.asReadonly();
  authService=inject(Authservices);


  ngOnInit(): void {
    
   this.authService.getCurrentUser().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.userProfile.set(res);
      },
      error:(err)=>{
        console.error(err);
      }
    });
  }
  constructor(){
  }

  get fullName(): string {
    return `${this.profile().firstName} ${this.profile().lastName}`;
  }

  get initials(): string {
    if(this.profile().firstName?.length<=0 )return `${this.profile().lastName.charAt(0)}`.toUpperCase();
      
    if(this.profile().lastName?.length<=0)return`${this.profile().firstName.charAt(0)}`.toUpperCase();

    return `${this.profile().firstName.charAt(0)}${this.profile().lastName.charAt(0)}`.toUpperCase();
  }

  onEditProfile(): void {
    console.log('Edit profile clicked');
  }
}
