import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constant';
import { AuthService } from 'src/app/pages/auth/auth.service';
import {CommonMethods} from 'src/app/services/common-methods';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('signInNgForm')
  @Output() newMessageEvent = new EventEmitter<string>();

  signInNgForm: NgForm;
  signInForm: FormGroup;
  errormassage: String;
  otpstart:boolean=false;

  myInputMessage="Please enter OTP"
  constructor(
    private constant : AppConstants,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    public commonMethod: CommonMethods,
    public dataService: DataService
    ) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])

    });
  }
  loginForm=this._formBuilder.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
    
  })

  get email() { return this.loginForm.get("email") }
  get password() { return this.loginForm.get("password") }
  responseData:any=""
  signIn(){
// this.commonMethod.login(this.loginForm.value).subscribe({
//   next: (res:any)=>{
      // console.log(res)
      // this.responseData=res
      // this.otp()
    // if(this.responseData.ErrorMessage=="Login Successful"){
      
      console.log(this.signInForm.value);
      this.signInForm.disable();

      // this.otpstart=true
      // const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/login';
      this._authService._authenticated = true;
      const redirectURL = '/dashboard';
      this._router.navigateByUrl(redirectURL)
    // }
    // else{
    //   alert("Email ID or Password is incorrect, Please try again...")
    //   return;
    // }
// }
  // })
  }

  // signIn()
  // {
  //     // Return if the form is invalid
  //     if(this.signInForm.invalid )
  //     {
  //         return;
  //     }
  //     
  //     // if(this.signInForm.value.password != 'Rv@0710%2022' || this.signInForm.value.username.toLowerCase() != 'pravin.prajapati@kiya.ai'){
  //     //   this.errormassage = "please enter valid credentials";
  //     //   this.signInForm.reset();
  //     //   return
  //     // }

  //     // Disable the form
  //     this.signInForm.disable();
  //     this._authService._authenticated = true;
  //     const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/login';
      
  //     this._router.navigateByUrl(redirectURL);
       // Sign in
       // this._authService.signIn(this.signInForm.value)
       //     .subscribe(
      //         () => {

       //             // Set the redirect url.
       //             // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
       //             // to the correct page after a successful sign in. This way, that url can be set via
       //             // routing file and we don't have to touch here.
                  

       //             // Navigate to the redirect url
                 

       //         },
       //         (response) => {

      //             // Re-enable the form
       //             this.signInForm.enable();

       //             // Reset the form
       //             this.signInNgForm.resetForm();

       //         }
       //     );
  // }

  GetChildData(data){  
    // Disable the form
       this.signInForm.disable();
       this._authService._authenticated = true;
       const redirectURL = '/commonotp';
      this._router.navigateByUrl(redirectURL);
 } 
otp(){
  this._router.navigateByUrl('/commonotp');
}
  registerationhomepage(){
    this._router.navigate(['registrationsteps'])
  }

  unableToLogin(){

  }

}
