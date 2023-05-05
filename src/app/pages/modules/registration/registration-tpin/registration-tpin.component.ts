import { Component, EventEmitter, Output, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { RegistrationTpinService } from './registration-tpin.service';

@Component({
  selector: 'app-registration-tpin',
  templateUrl: './registration-tpin.component.html',
  styleUrls: ['./registration-tpin.component.scss']
})
export class RegistrationTpinComponent {
  setcredentialTpinForm: FormGroup;
  confirmTpinError = "";
  newTpinError = "";
  tpinRepeatError: boolean = false;
  tpinConsecutiveError: boolean = false;
  validNewError: boolean = false
  tpinMatch: boolean = true;
  @ViewChildren('sTpin') sTpin: any;
  @ViewChildren('cTpin') cTpin: any;
  sTpinInput = ['tpin1', 'tpin2', 'tpin3', 'tpin4']
  cTpinInput = ['confTpin1', 'confTpin2', 'confTpin3', 'confTpin4']
  @Output() nextEvent = new EventEmitter<any>();
  @Output() prevEvent = new EventEmitter<string>();


  constructor(
    private _router: Router,
    private DataService: DataService,
    private registrationTpinService : RegistrationTpinService,
    private constant: AppConstants,
    private http: HttpRestApiService) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.setcredentialTpinForm = new FormGroup({
      tpin1: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      tpin2: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      tpin3: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      tpin4: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      
      confTpin1: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      confTpin2: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      confTpin3: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      confTpin4: new FormControl('', [Validators.required, Validators.maxLength(1)]),
     
    });
  }
  validateForm() {
    if (this.setcredentialTpinForm.invalid) {
      this.setcredentialTpinForm.get('tpin1').markAsTouched();
      this.setcredentialTpinForm.get('tpin2').markAsTouched();
      this.setcredentialTpinForm.get('tpin3').markAsTouched();
      this.setcredentialTpinForm.get('tpin4').markAsTouched();
      
      this.setcredentialTpinForm.get('confTpin1').markAsTouched();
      this.setcredentialTpinForm.get('confTpin2').markAsTouched();
      this.setcredentialTpinForm.get('confTpin3').markAsTouched();
      this.setcredentialTpinForm.get('confTpin4').markAsTouched();
      
      return;
    }
  }
  tpinMisMatch(formGroup: FormGroup) {
    const { value: tpin1 } = formGroup.get('tpin1');
    const { value: tpin2 } = formGroup.get('tpin2');
    const { value: tpin3 } = formGroup.get('tpin3');
    const { value: tpin4 } = formGroup.get('tpin4');
    
    let Tpin = tpin1 + tpin2 + tpin3 + tpin4 ;

    const { value: confTpin1 } = formGroup.get('confTpin1');
    const { value: confTpin2 } = formGroup.get('confTpin2');
    const { value: confTpin3 } = formGroup.get('confTpin3');
    const { value: confTpin4 } = formGroup.get('confTpin4');
    
    let confirmTpin = confTpin1 + confTpin2 + confTpin3 + confTpin4 ;

    return Tpin === confirmTpin ? null : { tpinNotMatch: true };
  }

  goToPage(page) {
    this.changStep();

  }
  onKeyUp(index, event, type) {
    const eventCode = event.which || event.keyCode;
    console.log(index);
    console.log(event.which);
    console.log(event.keyCode);

    if (this.getSpasswordElement(index, type).value.length === 1) {
      if (index !== 3) {
        this.getSpasswordElement(index + 1, type).focus();
      } else {
        this.getSpasswordElement(index, type).blur();
        // Submit code
        console.log('submit code ');
      }
    }
    if (eventCode === 12 && index !== 1) {
      this.getSpasswordElement(index - 1, type).focus();
    }
    if (eventCode === 8 || eventCode === 229) {
      if (event.key != "Unidentified") {
        // this.enterConfrmTPin = false;this.tpinNotMatched = false;this.tpinRepeatError = false;this.tpinConsecutiveError = false;
        if (type == 'spassword') {
          this.setcredentialTpinForm.get(this.sTpinInput[index])?.setValue("");
        } else if (type == 'cpassword') {
          this.setcredentialTpinForm.get(this.cTpinInput[index])?.setValue("");
        }
        this.getSpasswordElement(index - 1, type).focus();
      }
    }
  }
  onFocus(index, type) {
    for (let item = 1; item < index; item++) {
      const currentElement = this.getSpasswordElement(item, type);
      if (!currentElement.value) {
        currentElement.focus();
        break;
      }
    }
  }
  prevEventSection(value: any) {
    this.prevEvent.next(value)
  }

  getSpasswordElement(index, type) {
    //console.log(this.tpinRows);
    if (type == "spassword") {
      if (index <= 3)
        return this.sTpin._results[index].nativeElement;
    }
    else if (type == "cpassword") {
      if (index <= 3)
        return this.cTpin._results[index].nativeElement;
    }

  }

  nextEventSection() {
    var tPIN = this.setcredentialTpinForm.value.tpin1 + this.setcredentialTpinForm.value.tpin2 + this.setcredentialTpinForm.value.tpin3 + this.setcredentialTpinForm.value.tpin4;
    var conftPIN = this.setcredentialTpinForm.value.confTpin1 + this.setcredentialTpinForm.value.confTpin2 + this.setcredentialTpinForm.value.confTpin3 + this.setcredentialTpinForm.value.confTpin4;

    tPIN.length == 4 ? this.newTpinError = '' : this.newTpinError = 'Please Enter New Tpin';
    conftPIN.length == 4 ? this.confirmTpinError = '' : this.confirmTpinError = 'Please Enter Confirm Mpin';

    this.tpinRepeatError = false;
    this.tpinConsecutiveError = false;
    this.validNewError = false
    this.tpinRepeatError = this.checkRepeatedDigits(tPIN);
    this.tpinConsecutiveError = this.checkConsecutiveDigits(conftPIN);


    if (this.tpinRepeatError || this.tpinConsecutiveError) {
      this.validNewError = true;
      return
    }

    this.tpinMatch = this.checkTpinMatch(this.getTPINValue(), this.getConfirmTPINValue());
    if (this.setcredentialTpinForm.valid && !this.tpinRepeatError && !this.tpinConsecutiveError && this.tpinMatch) {
      this.DataService.registrationObj.TPIN = this.setcredentialTpinForm.value.tpin1 + this.setcredentialTpinForm.value.tpin2 + this.setcredentialTpinForm.value.tpin3 + this.setcredentialTpinForm.value.tpin4;
      //this.nextEvent.next(value)
      // alert('success')
      this.registerSetTPIN()
    }
    else {
      this.validateForm();
    }


  }
  getTPINValue() {
    var tpin = "";
    for (const field in this.setcredentialTpinForm.controls) { // 'field' is a string
      const control = this.setcredentialTpinForm.get(field); // 'control' is a FormControl
      if (field.includes('tpin') && !control.hasError('required')) {
        tpin += control.value;
      }
    }
    return tpin;
  }
  getConfirmTPINValue() {
    var confirmTPIN = "";
    for (const field in this.setcredentialTpinForm.controls) { // 'field' is a string
      const control = this.setcredentialTpinForm.get(field); // 'control' is a FormControl
      if (field.includes('confTpin') && !control.hasError('required')) {
        confirmTPIN += control.value;
      }
    }
    return confirmTPIN;
  }
  checkRepeatedDigits(val) {
    console.log('checkRepeatedDigits val', val);
    let regex1 = /^([0-9])\1{5}$/;
    if (regex1.test(val)) {
      console.log("repeated true");
      // this.repeatedDigits = true;
      return true;
    } else {
      console.log("repeated false");
      // this.repeatedDigits = false;
      return false;
    }
  }
  checkConsecutiveDigits(val) {
    console.log('checkConsecutiveDigits val === ', val);

    if (val == "012345" || val == "123456" || val == "234567" || val == "345678" || val == "456789" || val == "567890") {
      console.log("consecutive true");
      // this.consecutiveDigits = true;
      return true;
    } else if (val == "987654" || val == "876543" || val == "765432" || val == "654321" || val == "543210" || val == "098765") {
      console.log("consecutive true");
      // this.consecutiveDigits = true;
      return true;
    } else {
      console.log("consecutive false");
      // this.consecutiveDigits = false;
      return false;
    }
  }
  checkTpinMatch(tpinVal, confirmTpinVal) {
    if (tpinVal === confirmTpinVal) {
      return true;
    } else {
      return false;
    }
  }
  changStep() {
    this.nextEvent.next(this.DataService.regIsAtStep);
  }
  registerSetTPIN()
  {
    var param=this.registrationTpinService.getsetTPINParam(this.setcredentialTpinForm.value)
    let deviceID = this.constant.deviceID;
    this.registerTPINApiCall(param,deviceID)
  }

  registerTPINApiCall(param,deviceID)
  {
    this._router.navigateByUrl('/registrationsuccess');
    // this.http.callBankingAPIService(param,deviceID,this.constant.serviceName_SETLOGINCREDENTIAL).subscribe(data=>{
    // console.log(data);
    // var resp = data.responseParameter
    //   if (resp.opstatus == "00") {
    //     console.log(data.responseParameter);
    //     this._router.navigateByUrl('/registrationsuccess');
    //   }

    // });
  }

}
