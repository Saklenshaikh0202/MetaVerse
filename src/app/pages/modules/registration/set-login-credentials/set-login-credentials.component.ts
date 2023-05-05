import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constant';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { DataService } from 'src/app/services/data.service';
import { SetLoginCredentialsService } from './set-login-credentials.service';
import { pageLoaderService } from 'src/app/services/pageloader.service';
import { CommonMethods } from 'src/app/services/common-methods';
import { TranslatePipe } from 'src/app/pipes/translate.pipe';

@Component({
  selector: 'app-set-login-credentials',
  templateUrl: './set-login-credentials.component.html',
  styleUrls: ['./set-login-credentials.component.scss']
})
export class SetLoginCredentialsComponent {
  @ViewChild('registrationForm')
  @Output() newMessageEvent = new EventEmitter<string>();
  // @Output() nextEvent = new EventEmitter<any>();
  @Output() prevEvent = new EventEmitter<any>();

  setcredentialForm: FormGroup;
  userIdInvalidMsg = "";
  isUsernameAvailable = false;

  constructor(
    private constant: AppConstants,
    private _router: Router,
    private DataService: DataService,
    private http: HttpRestApiService,
    private encryptDecryptService: EncryptDecryptService,
    private localStorage: LocalStorageService,
    private form: FormBuilder,
    private setLoginCredentialsService: SetLoginCredentialsService,
    public loader: pageLoaderService,
    public commonMethod: CommonMethods,
    public translate: TranslatePipe,
  ) { }

  ngOnInit() {
    // this.buildForm();
  }

  userFile1: any = File;

  userFile2: any = File;
  userFile3: any = File;
url: string = '../../../assets/pic.jpg'
  url1: string = '../../../assets/pic.jpg' 

  buildForm() {
    this.setcredentialForm = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(this.constant.ALPHA_NUMERIC_REGEX)]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"), Validators.minLength(8), Validators.maxLength(20)]),
      consfirmPassword: new FormControl('', [Validators.required]),
    },
      {
        validators: [this.password.bind(this)]
      });
  }

  mobPrevclick() {

  }

  onFileSelect1(file1: any) {

    if (file1.target.files) {

      const reader1 = new FileReader();

      reader1.readAsDataURL(file1.target.files[0]);

      reader1.onload = (event: any) => {

        this.url1 = event.target.result;

      }

    }

    const filedata1 = file1.target.files[0];

    console.log(filedata1);

    console.log(file1);

  }






  onFileSelect(file: any) {

    if (file.target.files) {

      const reader = new FileReader();

      reader.readAsDataURL(file.target.files[0]);

      reader.onload = (event: any) => {

        this.url = event.target.result;

      }

    }

    const filedata = file.target.files[0];

    console.log(filedata);

    console.log(file);

  }


  validateForm() {
    if (this.setcredentialForm.invalid) {
      this.setcredentialForm.get('userId').markAllAsTouched();
      this.setcredentialForm.get('password').markAsTouched();
      this.setcredentialForm.get('consfirmPassword').markAsTouched();
      return;
    }
  }
  nextEventSection(value: any) {
    if (this.setcredentialForm.valid) {
      console.log(this.setcredentialForm)
      if (!this.isUsernameAvailable) {
        this.userIdInvalidMsg = "Please verify to proceed"
      }
      if (!this.isUsernameAvailable) {
        return;
      }
      this.setLoginCredentialsApi(value)
    }

    else {
      this.validateForm();
    }

  }

  prevEventSection(value: any) {
    this.prevEvent.next(value)
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: consfirmPassword } = formGroup.get('consfirmPassword');
    return password === consfirmPassword ? null : { passwordNotMatch: true };
  }


  checkavailabilityUserID() {
    var param = this.setLoginCredentialsService.checkavailabiltyUserIDParam(this.setcredentialForm.value.userId);
    this.http.callBankingAPIService(param, this.constant.deviceID, this.constant.serviceName_CHECKUSERAVAILABILITY)
      .subscribe((data) => {
        console.log(data);
        var resp = data.responseParameter;
        if (resp.opstatus == '00') {
          this.isUsernameAvailable = true;
          this.userIdInvalidMsg = "Username Available"
        }
        else {
          this.isUsernameAvailable = false;
          this.userIdInvalidMsg = "Username Not Available"
        }
        this.loader.hideLoader();
      });
  }


  setLoginCredentialsApi(value: any) {
    this.DataService.registrationObj.userId = this.setcredentialForm.value.userId.toLowerCase();
    this.DataService.registrationObj.password = this.setcredentialForm.value.password;
    var param = this.setLoginCredentialsService.setLoginCredentialsParam(this.setcredentialForm.value)
    let deviceID = this.constant.deviceID;
    this.setLoginCredentialsApiCall(param, deviceID, value)
  }

  setLoginCredentialsApiCall(param, deviceID, value) {
    this.http.callBankingAPIService(param, deviceID, this.constant.serviceName_SETLOGINCREDENTIAL).subscribe(data => {
      console.log(data);
      var resp = data.responseParameter
      if (resp.opstatus == "00") {
        console.log(data.responseParameter);
        this.DataService.registrationObj.username = this.setcredentialForm.value.userId.toLowerCase();
        this.DataService.registrationObj.newPassword = this.setcredentialForm.value.password;
        var paramComplete = this.setLoginCredentialsService.registrationCompleteParam(this.setcredentialForm.value);
        this.registrationCompleteApiCall(paramComplete, this.constant.deviceID);
      }
    });
  }

  registrationCompleteApiCall(param, deviceID) {
    this.http.callBankingAPIService(param, deviceID, this.constant.serviceName_REGISTRATIONCOMPLETE).subscribe(data => {
      console.log(data);
      var resp = data.responseParameter
      if (resp.opstatus == "00") {
        console.log(data.responseParameter);
        this.DataService.registrationObj.username = this.setcredentialForm.value.userId.toLowerCase();
        this.DataService.registrationObj.newPassword = this.setcredentialForm.value.password;
        this.nextEvent.next(5)  //call success screen
      }
    });
  }
  passwordpolicy() {
    this.commonMethod.openPopup("div.password-popup");
  }

  usernamepolicy() {
    this.commonMethod.openPopup("div.username-popup");
  }

  // goToPage(page) {
  //   // this.changStep();
  // }

  onContryCondeChange(event) {
  }

  GetChildData(data) {
    // this.otpstart = false;
    console.log(data);
  }

  goToPage(page: any) {
    this.changStep(page);

  }
  changStep(page: any) {

    this.nextEvent.next(page);
  }
  @Output() nextEvent = new EventEmitter<number>();

}
