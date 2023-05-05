import { Component, EventEmitter, Output, ViewChildren } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-registration-mpin',
  templateUrl: './registration-mpin.component.html',
  styleUrls: ['./registration-mpin.component.scss']
})
export class RegistrationMpinComponent {
  entermpin : boolean = false;
  enterConfrmmpin : boolean = false;
  mpinNotMatched : boolean =  false;
  isFormValid : boolean = false;
  mpinValue:any = "";
  isAlreadyMBUser: any = "N";
  public formErrorsstep6 = {
    mpin: '',
    confMpin: '',
  };
  @ViewChildren('sMpin') sMpin: any;
  @ViewChildren('cMpin') cMpin: any;

  @Output() prevEvent = new EventEmitter<number>();
  @Output() nextEvent2 = new EventEmitter<number>();
  regiFormVerifyMpin: FormGroup;
  mpinRepeatError : boolean = false;
  mpinConsecutiveError : boolean = false;
  constructor(
    private _router: Router,
    private DataService:DataService,
    private router: Router,
    private constant: AppConstants,
    ) { }

  ngOnInit(): void {

  }
  goToPage(page) {
    this.changStep();

  }
  changStep(){
    this.nextEvent.next(4);
  }
  @Output() nextEvent = new EventEmitter<number>();

   onKeyUp(index, event,type) {
    const eventCode = event.which || event.keyCode;
    console.log(index);
    console.log(event.which);
    console.log(event.keyCode);

    if (this.getSpasswordElement(index, type).value.length === 1) {
      if (index !== 5) {
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
      // this.MPINForm.get('upassword1').reset();
      // this.MPINForm.get('upassword2').reset();
      // this.MPINForm.get('upassword3').reset();
      // this.MPINForm.get('upassword4').reset();
      // this.MPINForm.get('upassword5').reset();
      // this.MPINForm.get('upassword6').reset();
      // this.mPinRows._results[0].nativeElement.focus();
      if (event.key != "Unidentified") {
        this.enterConfrmmpin = false;this.mpinNotMatched = false;this.mpinRepeatError = false;this.mpinConsecutiveError = false;
        //this.otpForm.get(this.uFormInput[index]).setValue("");
        this.getSpasswordElement(index - 1, type).focus();
      }
    }
  }
  
  onFocus(index,type) {
    for (let item = 1; item < index; item++) {
      const currentElement = this.getSpasswordElement(item, type);
      if (!currentElement.value) {
        currentElement.focus();
        break;
      }
    }
  }

  getSpasswordElement(index, type) {
    //console.log(this.mPinRows);
    if (type == "spassword") {
      if (index <= 5)
        return this.sMpin._results[index].nativeElement;
    }
    else if (type == "cpassword") {
      if (index <= 5)
        return this.cMpin._results[index].nativeElement;
    }

  }

}
