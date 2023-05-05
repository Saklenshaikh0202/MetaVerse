import { Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable, Subject } from 'rxjs';
import { AppConstants } from '../app.constant';
import { EncryptDecryptService } from './encrypt-decrypt.service';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  regIsAtStep: number = 1;
  public subject = new Subject<any>();
  breadcrumblist = [{ 'currentRoute': 'dashboard', "routeName": '/dashboard' }];
  public disableBack:boolean; 
  isCordovaAvailable = window.hasOwnProperty('cordova');
  platform: any = "android";
  public latitude = null;
  public longitude = null;
  public userLocationName = null;
  //platform: any = "ios";
  informationLabel = "";
  informationDetails = "";
  primaryBtnText = "";
  information = "";
  ipAddress = "";
  isContactsSyncEnabled = false;
  mobileContacts = [];
  mobileContactsClone = [];
  timeoutHeader = '';
  timeoutMsg = '';
  errorMsg = '';
  serviceType:string = '';
  serviceUrl:string = '';
  serviceName_VALIDATEOTP = "OTP/VALIDATEOTP";
  serviceName_RESENDOTP = "OTP/RESENDOTP";
  isOTPValid: boolean=false;

  registrationObj:any ={
   MobileNo : '',
   oldPassword :'',
   password :'',
   userId :'',
   TPIN :'',
  }

  constructor(
    private constants: AppConstants, 
    private encryptService: EncryptDecryptService, 
    private storage: LocalStorageService, 
    private router: Router, 
    private ngZone: NgZone) { }

    otplength:any;
    otpName:any = 'OTP';
  
  getAccountCarouselOptions() {
    var autowidth;
    if (window.innerWidth < 767) {
      autowidth = false
    } else {
      autowidth = true
    }

    let accountCarouselOptions: OwlOptions = {
      margin: 20,
      nav: false,
      autoplay: false,
      autoplayTimeout: 3000,
      loop: false,
      rewind: true,
      autoWidth: autowidth,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        640: {
          items: 1,
        },
        768: {
          items: 1,
          //nav: true,
          // loop:false
        },
        1024: {
          items: 2,
          //nav: true,
          // loop:false
        },
        1200: {
          items: 2,
          //nav: true,
          // loop:false
        },
        1366: {
          items: 2,
          //nav: true,
          // loop:false
        },
        1400: {
          items: 2,
          //nav: true,
          // loop:false
        },
        1600: {
          items: 2,
          //nav: true,
          // loop:false
        }
      }

  }
    return accountCarouselOptions;
  }

   /**
  * @function getChannelType
  * description - unique function to get channel type
  */
   getChannelType() {
    //only one type of registration
    return this.constants.val_channelValueIB
    // if (window.hasOwnProperty('cordova')) {
    //   if (device.platform == "Android" || device.platform == "iOS") {
    //     return this.channelType
    //   }
    // } else {
    //   return this.constants.val_channelValueIB
    // }
  }
  
  sendNotification(message: string) {
    this.subject.next({ text: message });
  }

  getNotification(): Observable<any> {
    return this.subject.asObservable();
  }
  
  getBreadcrumb(currentRoute, routeName) {

    if (routeName != '') {
      // this.curruntURL.next(routeName);


      if (currentRoute == "sidenav" || currentRoute == "DASHBOARD") {

        if ('/' + routeName != this.router.url) {
          this.breadcrumblist = [{ 'currentRoute': 'DASHBOARD', "routeName": '/dashboard' }];
        }
      } else {
        var ind = -1
        ind = this.breadcrumblist.findIndex(function (person) {
          return person.routeName == routeName
        });
        if (ind == -1) {
          this.breadcrumblist.push({ 'currentRoute': currentRoute, "routeName": routeName })
        } else {
          this.breadcrumblist.splice(ind + 1, 1);
        }
      }
    }
  }



  breadcrumroute(routeName) {
    this.updateBreadcrumb(this.router.url, routeName)
    this.router.navigateByUrl('/' + routeName);
  }

  updateBreadcrumb(currentRouteName, clickedRoute) {

    var index = this.breadcrumblist.findIndex(function (person) {
      return person.routeName == clickedRoute
    });

    this.breadcrumblist.splice(index, this.breadcrumblist.length - index);
  }

}
