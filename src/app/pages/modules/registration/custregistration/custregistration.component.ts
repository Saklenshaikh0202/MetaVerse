import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CustregistrationService } from './custregistration.service';
import { StoredetailsComponent } from '../storedetails/storedetails.component';

@Component({
  selector: 'app-custregistration',
  templateUrl: './custregistration.component.html',
  styleUrls: ['./custregistration.component.scss']
})
export class CustregistrationComponent {
  @ViewChild('registrationForm')
  @Output() newMessageEvent = new EventEmitter<string>();
  // @Output() nextEvent = new EventEmitter<any>();
  @Output() prevEvent = new EventEmitter<string>();

  registrationForm: FormGroup;
  radioOptions: boolean = true;
  contryCodeArray: any = ['230', '232'];
  otpstart: boolean;
  myInputMessage: string = "Please type OTP sent to your registered mobile number +230 8868 1042 &amp; Email - ID Navin6782@gmail.com";


  constructor(
    private constant: AppConstants,
    private _router: Router,
    private DataService: DataService,
    private http: HttpRestApiService,
    private custRegistrationService: CustregistrationService,
    private localStorage: LocalStorageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.registrationForm = new FormGroup({
    //   firstname : new FormControl('', [Validators.required]),
    //   surname : new FormControl('', [Validators.required]),
    //   email : new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]),
    //   contrycode: new FormControl('', [Validators.required]),
    //   mobilenumber: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]),
    //   residentialaddress : new FormControl('', [Validators.required]),
    //   nicNumber : new FormControl('', [Validators.required, Validators.minLength(14)]),
    //   passportNumber : new FormControl('')

    // });
    // this.registrationForm.controls['contrycode'].setValue('230');

  }
  // goToPage(page:any) {
  //   this.changStep(page);

  // }


  regpoi = this.fb.group({
    AssetGroupId: [1],

    PlaceDescription: ["", Validators.required],

    PlaceDistanceInMeters: [0, Validators.required]

  })


  @Output() orgdetails = new EventEmitter<string>();

  getData(obj: any) {
    this.sendData(obj)
  }

  sendData(obj: any) {
    this.orgdetails.next(obj)
  }

  prevEventSection(value: any) {
    this.prevEvent.next(value)
  }

  onContryCondeChange(event) {

  }

  //   GetChildData(data,page:any){
  //     if(data){
  //       this.otpstart = false;
  //       console.log(data);
  //       this.changStep(page);
  //     }
  //  } 

  onRadioChange(event) {
    console.log(event.target.defaultValue);
    if (event.target.defaultValue == 'nic') {
      this.radioOptions = true;
      this.registrationForm.get('passportNumber').reset();
      this.registrationForm.get('passportNumber').clearValidators();
      this.registrationForm.get('passportNumber').updateValueAndValidity();
      this.registrationForm.get('nicNumber').setValidators([Validators.required, Validators.minLength(14)]);
      this.registrationForm.get('nicNumber').updateValueAndValidity();

    } else {
      this.radioOptions = false;
      this.registrationForm.get('nicNumber').reset();
      this.registrationForm.get('nicNumber').clearValidators();
      this.registrationForm.get('nicNumber').updateValueAndValidity();
      this.registrationForm.get('passportNumber').setValidators([Validators.required, Validators.minLength(15)]);
      this.registrationForm.get('passportNumber').updateValueAndValidity();



    }

  }

  submitForm() {
    this.otpstart = false;
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      var formData = this.registrationForm.value;
      let param = this.custRegistrationService.getRegParam(formData);
      this.http.callBankingAPIService(param, this.constant.deviceID, this.constant.serviceName_REGISTRATION).subscribe(data => {
        console.log(JSON.stringify(data));
        var resp = data.responseParameter;
        if (resp.opstatus == "00") {
          this.localStorage.setLocalStorage("mobileNo", formData.mobilenumber);
          this.localStorage.setLocalStorage("emailId", formData.email);
          this.DataService.serviceType = "REGISTRATION";
          this.DataService.serviceUrl = this.constant.serviceName_RESENDOTP;
          this.otpstart = true;
        }
      })
    }
    else {
      return;
    }
  }

  // convenience getter for easy access to form fields
  // get f() { return this.registrationForm.controls; }

  goToPage(page: any) {
    this.changStep(page);

  }
  changStep(page: any) {

    this.nextEvent.next(page);
  }
  @Output() nextEvent = new EventEmitter<number>();


}