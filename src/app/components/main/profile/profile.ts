import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  profile = {
    firstName: 'Vinay',
    secondName: 'Magam',
    email: 'vinay@example.com',
    mobileNo: '+91 98765 43210',
  };

  get fullName(): string {
    return `${this.profile.firstName} ${this.profile.secondName}`;
  }

  get initials(): string {
    return `${this.profile.firstName.charAt(0)}${this.profile.secondName.charAt(0)}`.toUpperCase();
  }

  onEditProfile(): void {
    console.log('Edit profile clicked');
  }
}
