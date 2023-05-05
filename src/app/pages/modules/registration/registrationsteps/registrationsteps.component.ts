import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonMethods } from 'src/app/services/common-methods';
import { DataService } from 'src/app/services/data.service';
import { TearmsandconditionsComponent } from '../tearmsandconditions/tearmsandconditions.component';

@Component({
  selector: 'app-registrationsteps',
  templateUrl: './registrationsteps.component.html',
  styleUrls: ['./registrationsteps.component.scss']
})
export class RegistrationstepsComponent implements OnInit {
  activeTab: any
  curentTabIndex: any;
  information: any;
  termsCondition: any
  @ViewChild(TearmsandconditionsComponent) child: TearmsandconditionsComponent;
  completedStep: boolean;

  ngOnInit(): void {
    this.initializeSteps();
    this.setRegisteredStep();
  }
  constructor(
    private _router: Router,
    private DataService: DataService,
    public commonMethod: CommonMethods,
  ) { }

  registrationsteps: any;

  initializeSteps() {
    this.registrationsteps = [{
      "stepIndex": 1,
      "stepname":
        "Account Details",
      "stepActive": true,
      "stepStatus": "complete",
      "tabName": "step1"
    },
    {
      "stepIndex": 2,
      "stepname": "Channel Credentials",
      "stepActive": false,
      "stepStatus": "inprogress",
      "tabName": "step2"
    },
    {
      "stepIndex": 3,
      "stepname": "Set Login Credentials",
      "stepActive": false,
      "stepStatus": "incomplete",
      "tabName": "step3"
    },
    {
      "stepIndex": 4,
      "stepname": "Set MPIN",
      "stepActive": false,
      "stepStatus": "incomplete",
      "tabName": "step4"
    },
    {
      "stepIndex": 5,
      "stepname": "Set TPIN",
      "stepActive": false,
      "stepStatus": "incomplete",
      "tabName": "step5"
    },
    {
      "stepIndex": 6,
      "stepname": "Success",
      "stepActive": false,
      "stepStatus": "incomplete",
      "tabName": "step6"
    },
    {
      "stepIndex": 7,
      "stepname": "Success",
      "stepActive": false,
      "stepStatus": "incomplete",
      "tabName": "step7"
    }
    ]

  }

  setRegisteredStep() {

    this.DataService.regIsAtStep = 1
    console.log(this.DataService.regIsAtStep);
    let stepindex = this.DataService.regIsAtStep - 1;
    for (let i = 0; i <= stepindex; i++) {
      this.registrationsteps[i].stepStatus = "completed"
      this.registrationsteps[i].stepActive = false
    }
    this.registrationsteps[stepindex].stepActive = true
    if (this.registrationsteps[stepindex].stepStatus != "completed") {
      this.registrationsteps[stepindex].stepStatus = "inprogress"
    }
    this.activeTab = "step" + (this.DataService.regIsAtStep);
    this.curentTabIndex = stepindex = this.DataService.regIsAtStep;
  }

  setProgressStep(stepNo) {
    debugger
    this.registrationsteps[stepNo - 1].stepActive = true;
    this.registrationsteps[stepNo - 1].stepStatus = 'inprogress';
    this.activeTab = "step" + stepNo;
    for (var i = 0; i < stepNo - 1; i++) {
      this.registrationsteps[i].stepActive = false;
      this.registrationsteps[i].stepStatus = "incomplete";
    }
  }

  onstepChange(stepname, stepindex) {

    console.log(stepname, stepindex);
    this.activeTab = stepname
    console.log(stepname)
    for (let i = 0; i < this.registrationsteps.length; i++) {
      this.registrationsteps[i].stepActive = false;
    }
    this.registrationsteps[stepindex - 1].stepActive = true;
  }

  mobPrevclick(type?) {
    // if (type != undefined && type == 'cross') {
    //   // this._router.navigateByUrl('/registrationMobCheck');
    // }
    // else{
    //   if(this.constant.getPlatform() == "web"){
    //     this.router.navigateByUrl('/nliLanding');
    //   }
    //   else{
    //     this.router.navigateByUrl('/LandingPage');
    //   }

  }

  act: boolean = false

  prevstep(step) {
    let stepindex = step
    console.log(stepindex)
    this.registrationsteps[stepindex].stepActive = true
    this.registrationsteps[stepindex + 1].stepActive = false
    this.activeTab = "step" + (step)
    console.log(step)
    this.curentTabIndex = step
  }
  steps: any
  nextstep(step) {
    console.log(step);

    //  debugger
    let stepindex = step
    console.log(stepindex)
    // this.child.changStep()
    let y = false
    // if (y) {
    //   if ((step + 1) > 4) {
    //     stepindex = step - 2
    //   }
    //   this.registrationsteps[stepindex].stepStatus = "completed"
    //   this.registrationsteps[stepindex].stepActive = false
    //   this.registrationsteps[stepindex + 1].stepActive = true
    //   if (this.registrationsteps[stepindex + 1].stepStatus != "completed") {
    //     this.registrationsteps[stepindex + 1].stepStatus = "inprogress"
    //   }
    //   if ((step + 1) == 4) {
    //     this.activeTab = "step" + (step + 2)
    //   }
    //   else {
    //     this.activeTab = "step" + (step + 1)
    //   }

    // }
    // else {
    this.registrationsteps[stepindex].stepStatus = "completed"
    this.registrationsteps[stepindex].stepActive = true
    // this.registrationsteps[stepindex + 1].stepActive = true
    if (this.registrationsteps[stepindex].stepStatus != "completed") {
      this.registrationsteps[stepindex].stepStatus = "inprogress"
    }
    this.activeTab = "step" + (step)
    console.log(this.activeTab)
    this.steps = this.activeTab
    // for (let i = 0; i < step; i++) {
    //   console.log(`registrationsteps ${step}`)
    //   this.completedStep=true;

    // }
    this.onstepChange(this.activeTab, step)
    // if (this.steps=="step1") {
    //   this.my_class1="active"
    // }else{

    // }
    // }
    this.DataService.regIsAtStep = step
    this.curentTabIndex = step
  }

  my_class1: any

  homeData: any
  nextstep1(obj: any) {
    this.homeData = obj
  }

  poiData: any
  nextstep2(obj: any) {
    this.poiData = obj
  }

  memberData: any
  nextstep3(obj: any) {
    this.memberData = obj
  }

  closePopups(popupName) {
    this.commonMethod.closePopup('div.' + popupName);
  }

}
