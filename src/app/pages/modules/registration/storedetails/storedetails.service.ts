import { AppConstants } from "src/app/app.constant";
import { CommonMethods } from "src/app/services/common-methods";
import { DataService } from "src/app/services/data.service";
import { EncryptDecryptService } from "src/app/services/encrypt-decrypt.service";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { StoredetailsComponent } from "./storedetails.component";



export class StoredetailsService {
    constructor(
     private constant: AppConstants, 
     private encryptService: EncryptDecryptService,
     private constants: AppConstants, 
     private localStorage: LocalStorageService, 
     private dataService: DataService, 
     private encryptDecryptService: EncryptDecryptService,
     private commonMethod: CommonMethods,
     private store:StoredetailsComponent
   ) { }

getStoreDetails(){
    var reqobj
    reqobj={
    [this.constant.key_Mode]:this.store.signuser?.value.Mode,
    [this.constant.key_UserId]:this.store.signuser?.value.UserId,
    [this.constant.key_SuperOrganisation]:this.store.signuser?.value.SuperOrganisation,
    [this.constant.key_SuperOrganisationId]:this.store.signuser?.value.SuperOrganisationId,
    [this.constant.key_JurisOrganisationId]:this.store.signuser?.value.JurisOrganisationId,
    [this.constant.key_ApprovalRequired]:this.store.signuser?.value.ApprovalRequired,
    [this.constant.key_UserCode]:this.store.signuser?.value.UserCode,
    [this.constant.key_DomainUserCode]:this.store.signuser?.value.DomainUserCode,
    [this.constant.key_UserName]:this.store.signuser?.value.UserName,
    [this.constant.key_IsActive]:this.store.signuser?.value.IsActive,
     [this.constant.key_emailId]:this.store.signuser?.value.emailId,
      [this.constant.key_Password]:this.store.signuser?.value.Password,
    [this.constant.key_Country]:this.store.signuser?.value.Country,
    [this.constant.key_Language]:this.store.signuser?.value.Language,
    [this.constant.key_Theme]:this.store.signuser?.value.Theme,
    [this.constant.key_TimeZoneId]:this.store.signuser?.value.TimeZoneId,
    [this.constant.key_CreatedBy]:this.store.signuser?.value.CreatedBy,
    [this.constant.key_UserType]:this.store.signuser?.value.UserType,
    [this.constant.key_Teams]:this.store.signuser?.value.Teams,
    [this.constant.key_Locations]:this.store.signuser?.value.Locations,
    [this.constant.key_UserAccessDT]:this.store.signuser?.value.UserAccessDT,
    }
}

    }