import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app.constant';
import { CommonMethods } from 'src/app/services/common-methods';
import { DataService } from 'src/app/services/data.service';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SetLoginCredentialsService {

 constructor(private constant: AppConstants, 
    private encryptService: EncryptDecryptService,
    private constants: AppConstants, 
    private localStorage: LocalStorageService, 
    private dataService: DataService, 
    private encryptDecryptService: EncryptDecryptService,
    private commonMethod: CommonMethods) { }

  checkavailabiltyUserIDParam(userId){
    var reqObj;
     reqObj = {
       [this.constants.key_entityId]: this.constant.getEntityId(),
       [this.constants.key_cbsType]: this.constants.val_cbsTypeTcs,
       [this.constants.key_mobPlatform]: this.constants.val_mobPlatform,
       [this.constants.key_mobileAppVersion]: this.constants.val_mobileAppVersion,
       [this.constant.key_clientAppVersion]: this.constants.val_clientAppVersion,
       [this.constant.key_latitude]: this.constant.val_latitude,
       [this.constant.key_longitude]:this.constant.val_longitude,
       //[this.constant.key_mobileNumber]: this.localStorage.getLocalStorage('mobileNo'),
       [this.constant.key_mobileNumber]:'9404444775',
       [this.constant.key_userId]:userId.toLowerCase(),
     }
 
     console.log("checkavailabiltyUserID",+reqObj);
     let encryptData = this.encryptDecryptService.encryptText(this.constant.staticKey, JSON.stringify(reqObj));
     return encryptData;

  }

  setLoginCredentialsParam(formData){
    var reqObj;
    reqObj={
      [this.constants.key_entityId]: this.constant.getEntityId(),
       [this.constants.key_cbsType]: this.constants.val_cbsTypeTcs,
       [this.constants.key_mobPlatform]: this.constants.val_mobPlatform,
       [this.constants.key_mobileAppVersion]: this.constants.val_mobileAppVersion,
       [this.constant.key_clientAppVersion]: this.constants.val_clientAppVersion,
       [this.constant.key_latitude]: this.constant.val_latitude,
       [this.constant.key_longitude]:this.constant.val_longitude,
       [this.constant.key_mobileNumber]: this.localStorage.getLocalStorage('mobileNo'),
       //[this.constant.key_mobileNumber]:'919096516674',
       [this.constant.key_userId]:formData.userId.toLowerCase(),
       [this.constant.key_password]:this.encryptDecryptService.createMD5Value(formData.password),
    }

    console.log("setLoginCredentialsParam",+reqObj);
    let encryptData = this.encryptDecryptService.encryptText(this.constant.staticKey, JSON.stringify(reqObj));
    return encryptData;
  }

  registrationCompleteParam(formData){
    var reqObj;
    reqObj={
      [this.constants.key_entityId]: this.constant.getEntityId(),
       [this.constants.key_cbsType]: this.constants.val_cbsTypeTcs,
       [this.constants.key_mobPlatform]: this.constants.val_mobPlatform,
       [this.constants.key_mobileAppVersion]: this.constants.val_mobileAppVersion,
       [this.constant.key_clientAppVersion]: this.constants.val_clientAppVersion,
       [this.constant.key_latitude]: this.constant.val_latitude,
       [this.constant.key_longitude]:this.constant.val_longitude,
       [this.constant.key_mobileNumber]: this.localStorage.getLocalStorage('mobileNo'),
       //[this.constant.key_mobileNumber]:'919096516674',
       [this.constant.key_userId]: formData.userId.toLowerCase()

    }

    console.log("registrationCompleteParam",+reqObj);
    let encryptData = this.encryptDecryptService.encryptText(this.constant.staticKey, JSON.stringify(reqObj));
    return encryptData;
  }


}


