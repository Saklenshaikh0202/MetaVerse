import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app.constant';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';

@Injectable({
  providedIn: 'root'
})
export class CustregistrationService {

  constructor(private constant:AppConstants,
    private encryptDecryptService: EncryptDecryptService) { }

  getRegParam(formData) {
    var inputData = {
      [this.constant.key_cbsType]: this.constant.val_cbsType,
      [this.constant.key_clientAppVersion]: this.constant.val_clientAppVersion,
      [this.constant.key_deviceId]: this.constant.deviceID,
      [this.constant.key_emailId]: formData.email,
      [this.constant.key_entityId]: this.constant.val_entityIDDesk,
      [this.constant.key_firstName]: formData.firstname,
      [this.constant.key_idNumber]: formData.nicNumber ? formData.nicNumber : formData.passportNumber,
      [this.constant.key_idType]: "PASSPORT",
      [this.constant.key_lastName]: formData.surname,
      [this.constant.key_latitude]: this.constant.val_latitude,
      [this.constant.key_longitute]: this.constant.val_longitude,
      [this.constant.key_mobPlatform]: this.constant.val_mobPlatform,
      [this.constant.key_mobileAppVersion]: this.constant.val_mobileAppVersion,
      [this.constant.key_mobileNumber]: formData.mobilenumber,
      [this.constant.key_prefered_Language]: this.constant.val_default_lang,
      [this.constant.key_sourceIp]: "103.58.152.19",
    }
    console.log("getRegParam------->>>", inputData);
    let encryptData = this.encryptDecryptService.encryptText(this.constant.staticKey, JSON.stringify(inputData));
    return encryptData;
  }
}
