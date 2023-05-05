import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app.constant';
import { CommonMethods } from 'src/app/services/common-methods';
import { DataService } from 'src/app/services/data.service';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommonOtpService {
   constructor(
    private constant: AppConstants, 
    private encryptService: EncryptDecryptService,
    private constants: AppConstants, 
    private localStorage: LocalStorageService, 
    private dataService: DataService, 
    private encryptDecryptService: EncryptDecryptService,
    private commonMethod: CommonMethods
  ) { }

  getResendOTPReqParam() {
    var reqObj;
     reqObj = {
       [this.constants.key_entityId]: this.constant.getEntityId(),
       [this.constants.key_cbsType]: this.constants.val_cbsTypeTcs,
       [this.constants.key_mobPlatform]: this.constants.val_mobPlatform,
       [this.constants.key_mobileAppVersion]: this.constants.val_mobileAppVersion,
       [this.constant.key_clientAppVersion]: this.constants.val_clientAppVersion,
       [this.constant.key_latitude]: this.constant.val_latitude,
       [this.constant.key_longitude]:this.constant.val_longitude,
       [this.constant.key_requestType]:this.constant.val_requestType,
       [this.constant.key_deviceId]: this.constant.deviceID, //this.localStorage.getLocalStorage(this.constant.storage_deviceId),
       [this.constant.key_referenceNumber]: this.commonMethod.genRandomDigit(9),
       [this.constant.key_RRN]: this.commonMethod.genRandomDigit(9),
       [this.constant.key_mobileNumber]:this.localStorage.getLocalStorage('mobileNo'),
     }
 
     console.log(reqObj);
     return this.encryptService.encryptText(this.constant.staticKey, JSON.stringify(reqObj))
   }

 getOTPVerificationParam(otp){
  var reqObj;
  reqObj = {
    [this.constants.key_entityId]: this.constant.getEntityId(),
    [this.constants.key_cbsType]: this.constants.val_cbsTypeTcs,
    [this.constants.key_mobPlatform]: this.constants.val_mobPlatform,
    [this.constant.key_deviceId]: this.constant.deviceID,
    [this.constants.key_mobileAppVersion]: this.constants.val_mobileAppVersion,
    [this.constant.key_clientAppVersion]: this.constants.val_clientAppVersion,
    [this.constant.key_serviceType]: this.dataService.serviceType,
    [this.constant.key_latitude]: this.constant.val_latitude,
    [this.constant.key_longitude]:this.constant.val_longitude,
    [this.constant.key_otp]: otp,
    [this.constant.key_mobileNumber]:this.localStorage.getLocalStorage('mobileNo')
  }
    console.log(reqObj);
    return this.encryptService.encryptText(this.constant.staticKey, JSON.stringify(reqObj));    

 }

 
}
