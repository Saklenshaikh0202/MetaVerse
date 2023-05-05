import { Component, OnInit, ViewChildren,Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { AppConstants } from 'src/app/app.constant';
import { CommonMethods } from 'src/app/services/common-methods';
import { DataService } from 'src/app/services/data.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { FormValidationService } from 'src/app/services/form-validation.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { TranslatePipe } from 'src/app/pipes/translate.pipe';
import { pageLoaderService } from 'src/app/services/pageloader.service';
import { CommonOtpService } from './common-otp.service';
import { DatePipe } from '@angular/common';
declare var showToastMessage: any;

@Component({
  selector: 'app-common-otp',
  templateUrl: './common-otp.component.html',
  styleUrls: ['./common-otp.component.scss']
})
export class CommonOtpComponent implements OnInit {
  @ViewChildren("otpRow") otpRow: any;
  @ViewChildren('mobileOTPRow') mobileOTPRows: any;
  @Input() myinputMsg:string;  
 
  @Output() myOutput:EventEmitter<string>= new EventEmitter(); 
  outputMessage:string="I am child component." ;
  otpInput = ["otp1", "otp2", "otp3", "otp4"];
  mobileInput = ['mobile1', 'mobile2' ,'mobile3' , 'mobile4'];
  otpFormLimit: FormGroup;
  counter = 30;
  capCounter = 180;
  countDown: Subscription;
  tick = 1000;
  loginAttemptCount: any;
  incorrectLogin: boolean = false;
  attempRemaining: any;
  attemptedTime: any;
  submitDisabled: boolean = false;
  isMaxAttempt:boolean = false;
  public formErrors = {
    otp: '',
  };
  otpfailMsg:any;

  constructor(
    private router: Router,
    private formValidation: FormValidationService,
    private form: FormBuilder,
    public dataService: DataService,
    private http: HttpRestApiService,
    public constant: AppConstants,
    private storage: LocalStorageService,
    public commonMethod: CommonMethods,
    public translate : TranslatePipe,
    public loader: pageLoaderService,
    public commonOtpService:CommonOtpService,
    private datepipe: DatePipe,
    ){}

  ngOnInit(): void {
    this.initialization();
    this.myinputMsg="Please type OTP sent to your registered mobile number +230 8868 1042 &amp; Email - ID Navin6782@gmail.com";
    console.log(this.myinputMsg); 
  }
  initialization(){
    this.buildForm();
    this.commonMethod.openPopup('div.popup-bottom.otp-verify.sm-popup');
    this.resendOtp(1);
  }

  buildForm() {
  
    this.otpFormLimit = new FormGroup({
      otp1: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1),
      ]),
      otp2: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1),
      ]),
      otp3: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1),
      ]),
      otp4: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1),
      ]),
    });
  
}
validateForm() {
  if (this.otpFormLimit.invalid) {
    this.otpFormLimit.get('otp1').markAsTouched();
    this.otpFormLimit.get('otp2').markAsTouched();
    this.otpFormLimit.get('otp3').markAsTouched();
    this.otpFormLimit.get('otp4').markAsTouched();
    
    this.formErrors = this.formValidation.validateForm(
      this.otpFormLimit,
      this.formErrors,
      true
    );
    return;
  }
}


onKeyUpEventOtp(index: any, event: any, type: any) {
  const eventCode = event.which || event.keyCode;

  if (this.getSpasswordElementOtp(index, type).value.length === 1) {
    if (index !== 6) {
      this.getSpasswordElementOtp(index + 1, type).focus();
    } else {
      this.getSpasswordElementOtp(index, type).blur();
      // Submit code
      console.log('submit code ');
    }
  }
  if (eventCode === 12 && index !== 1) {
    this.getSpasswordElementOtp(index - 1, type).focus();
  }
  if (eventCode === 8 || eventCode === 229) {
    if (event.key != "Unidentified") {
      if (type == 'mobile') {
        this.otpFormLimit.get(this.mobileInput[index])?.setValue("");
      }
      else  if (type == 'otp')
      {
        this.otpFormLimit.get(this.otpInput[index])?.setValue("");
      }
      this.getSpasswordElementOtp(index - 1, type).focus();
    }
  }
}

onFocusEvent(index, type) {
  for (let item = 1; item < index; item++) {
    const currentElement = this.getSpasswordElementOtp(item, type);
    if (!currentElement.value) {
      currentElement.focus();
      break;
    }
  }
}

getSpasswordElementOtp(index: any, type: any) {
  if (type == 'mobile') {
    return this.mobileOTPRows._results[index].nativeElement;
  }
  else if(type == 'otp'){
    return this.otpRow._results[index].nativeElement;
  }
  
}
startCounter() {
  this.counter = 30;
  if (this.countDown && !this.countDown.closed) {
    this.countDown.unsubscribe();
  }
  this.countDown = timer(0, this.tick).subscribe(() => {
    if (this.counter == 1) this.countDown.unsubscribe();
    --this.counter;
  });
}

resendOtp(type) {
  //api call to get otp
   
  this.loader.showLoader();
  var otpParam = this.commonOtpService.getResendOTPReqParam();
  this.http
    .callBankingAPIService(
      otpParam,
      this.constant.deviceID,
      // this.storage.getLocalStorage("deviceId"),
      this.constant.serviceName_RESENDOTP
    )
    .subscribe((data) => {
      var _resp = data.responseParameter;
      this.loader.hideLoader();
      if (_resp.opstatus == "00") {
        if (type == "resend") {
          showToastMessage(_resp.Result, "success");
        }
        this.counter = 30;
        this.tick = 1000;
        this.startCounter();
      }
      this.otpfailMsg = "";
      this.otpFormLimit.reset();
    });
}
validateOtpAddlimit() {
  //only for checking
  this.myOutput.emit(this.outputMessage);
  this.commonMethod.closePopup('div.popup-bottom.otp-verify.sm-popup');
  var otpValue;
  this.validateForm();
  console.log(this.otpFormLimit.value);
  if (this.otpFormLimit.valid) {
     otpValue =
        this.otpFormLimit.value.otp1 +
        this.otpFormLimit.value.otp2 +
        this.otpFormLimit.value.otp3 +
        this.otpFormLimit.value.otp4 ;
       
    var param = this.commonOtpService.getOTPVerificationParam(otpValue);
    this.http
      .callBankingAPIService(
        param,
        this.constant.deviceID,
        // this.storage.getLocalStorage("deviceId"),
        this.constant.serviceName_OTPVERIFICATION 
      )
      .subscribe((data) => {
        console.log("=====validate otp=====", data);
        this.loader.hideLoader();

        var resp = data.responseParameter;
        if (resp.opstatus == "00") {
          console.log(data.responseParameter);
          this.storage.setSessionStorage("isLoggedIn", "true");
          this.myOutput.emit(this.outputMessage);
          
          this.commonMethod.closePopup('div.popup-bottom.otp-verify.sm-popup');
          this.otpfailMsg = "";
          // this.closeOtpPopup();
          
          
        } else if (resp.opstatus == "03") {
          this.isMaxAttempt = true;
          this.counter = 0;
          this.otpfailMsg = resp.Result;
          this.otpFormLimit.reset();
        } else {
          this.otpfailMsg = resp.Result;
          this.otpFormLimit.reset();
        }
      });
  }
}
closeOtpPopup() {
  this.myOutput.emit('closepop');
  this.commonMethod.closePopup('div.popup-bottom');
  this.otpFormLimit.reset();
  this.counter = 30;
  this.otpfailMsg = "";
}


}
