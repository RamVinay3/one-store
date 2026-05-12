import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInput } from '../../shared/input/input';
import { namedPatternValidator } from '../../../../validators';
import { REGEX_PATTERNS } from '../../../../regexPatterns';
import { getErrorMessage } from '../../../../getError';
import { HttpService } from '../../../services/api/api';
import { API_END_POINT } from '../../../../globalConstants';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, FormInput],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup implements OnInit {

 http = inject(HttpService);
router=inject(Router);

  signupForm!: FormGroup;
 getErrorMessage = getErrorMessage;
  constructor(private fb: FormBuilder) {}
  verifyEmail = signal(false);
  verifyMoileNumber = signal(false);
  ngOnInit() {
    this.signupForm = this.fb.group({
      mobileNo: ['',[Validators.required, namedPatternValidator('mobileNo', REGEX_PATTERNS.mobileNo)]],
      password: ['',[Validators.required, namedPatternValidator('password', REGEX_PATTERNS.password)]],
      confirmPassword: ['',[
        Validators.required,
        namedPatternValidator('confirmPassword', REGEX_PATTERNS.password),
      ]],
      firstName: ['',[Validators.required, namedPatternValidator('name', REGEX_PATTERNS.name)]],
      secondName: ['',[Validators.required, namedPatternValidator('name', REGEX_PATTERNS.name)]],
      email: ['',[Validators.required, namedPatternValidator('email', REGEX_PATTERNS.email)]],
      emailVerificationCode: ['',[Validators.required]],
      mobileVerificationCode: ['',[Validators.required]],
    });
  }
  onVerifyEvent = (type: string) => {
    if (type == 'email') this.verifyEmail.set(true);
    else if (type == 'mobileNo') this.verifyMoileNumber.set(true);
  };

  signup = () => {
     
     
    if (!this.verifyEmail()) alert('please verify the email');
    if (!this.verifyMoileNumber()) alert('please verify mobile number');

    if (this.signupForm.valid) {

     
      //bussiness logic.
      const {firstName, secondName:lastName, mobileNo:mobile,password,email}=this.signupForm.value;
      console.log(this.signupForm.value,"signup-form");
      const payload={
        firstName,
        lastName,
        mobile,
        email,
        password
      }
      
      this.http.post(API_END_POINT.SIGNUP,payload).subscribe({
        next:(response)=>{
          console.log("registered successfully,proceed with login");
          this.router.navigate(['auth/login']);
          
        },
        error:(error)=>{
          alert(error)
        }
      });
    }
  };
}
