import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, Form, FormGroup } from '@angular/forms';
import { FormInput } from '../../shared/input/input';
import { namedPatternValidator } from '../../../../validators';
import { REGEX_PATTERNS } from '../../../../regexPatterns';
import { getErrorMessage } from '../../../../getError';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormInput],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  constructor(private fb: FormBuilder,private router:Router) {}
  getErrorMessage = getErrorMessage;

  loginForm!: FormGroup;
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, namedPatternValidator('email',REGEX_PATTERNS.email)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          namedPatternValidator('password',REGEX_PATTERNS.password)
        ],
      ],
    });
  }

  login() {
    const errors=this.loginForm.get('password');
    console.log('vinay logged in',errors);
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      localStorage.setItem('jwt',"Iam present");
      this.router.navigate(['/dashboard'],{ replaceUrl: true });
    }
  }
}
