import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app.constant';
import { CommonMethods } from 'src/app/services/common-methods';
import { DataService } from 'src/app/services/data.service';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationTpinService {

  constructor( private constant: AppConstants,
    private encryptDecryptService: EncryptDecryptService,
    private storage: LocalStorageService,
    private dataService : DataService,
    private common : CommonMethods,
    private datepipe: DatePipe,
    private localStorage: LocalStorageService,
    private commonMethod:CommonMethods)
     { }

  getsetTPINParam(formData)
  {
    var inputData = {
      [this.constant.key_entityId]: this.constant.getEntityId(),
      [this.constant.key_mobPlatform]: this.constant.val_mobPlatform,
      [this.constant.key_mobileAppVersion]: this.constant.val_mobileAppVersion,
      [this.constant.key_clientAppVersion]: this.constant.val_clientAppVersion,
      [this.constant.key_latitude]: this.dataService.latitude,
      [this.constant.key_longitude]: this.dataService.longitude,
      [this.constant.key_mobileNumber]: this.localStorage.getLocalStorage('mobileNo'),
      [this.constant.key_channelType]: this.dataService.getChannelType(),
      [this.constant.key_TPIN]: this.encryptDecryptService.createMD5Value(formData),
      [this.constant.key_cifNumber] : this.dataService.registrationObj.custId,
      [this.constant.key_ServiceType]: ""
     
 
  }
  console.log("MHC registraion final param", JSON.stringify(inputData));
  let encryptData = this.encryptDecryptService.encryptText(this.constant.staticKey, JSON.stringify(inputData));
  return encryptData;
 }

}
