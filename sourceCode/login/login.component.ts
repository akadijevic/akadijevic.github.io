import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { authService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup; 
  public user$ = this.authService.user;
  
  constructor(private formBuilder: FormBuilder,private authService: authService,private router: Router,private elementRef: ElementRef) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

   }
   ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url("../../assets/img/banner-02.jpg")';
   }

  ngOnInit() {
  }

  //this function is called when the user tries to login
  login() {
    const inputValue=this.form.value;
    this.authService.login(inputValue.email,inputValue.password)
      .subscribe(
        success=>   {
          this.router.navigate(['home'])},
        error => alert(error)
      )
  }
}
