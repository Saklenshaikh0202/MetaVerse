import { Injectable } from '@angular/core';
declare var device: any;

@Injectable({
    providedIn: 'root'
})

export class AppConstants {

  /** public URL Api configuration */


  publicURL = {
    //serviceURL: 'https://infrabotsdev.infrasofttech.com/PNSMiddleware/rest/',
    serviceURL: 'http://sezcpu285:91/MetaToolKit_API/',
    serviceURL1: 'http://sezfatca:91/Metaverse_API/',
  };

  /** keys */

  key_entityId = 'entityId';

  key_cbsType = 'cbsType';
  key_channelType = 'channelType';
  key_mobileAppVersion = 'mobileAppVersion';
  key_deviceId = 'deviceId';
  key_dataType = "dataType";
  key_clientAppVersion = 'clientAppVer';
  key_latitude = 'latitude';
  key_longitude = 'longitute';
  key_prefered_Language = "prefered_Language";
  key_mobPlatform = 'mobPlatform';
  key_requestType = "requestType";
  key_serviceType = "service_Type";
  key_emailId="emailId";
  key_firstName="firstName";
  key_idNumber="idNumber";
  key_idType="idType";
  key_lastName="lastName";
  key_longitute="longitute";
  key_mobileNumber="mobileNumber";
  key_sourceIp="sourceIp";
  key_userId="userId";
  key_password='password';
  key_TPIN='TPIN';
  key_cifNumber = "cifNumber";
  key_ServiceType = 'service_Type';
  key_SuperOrganisation = 'SuperOrganisation';
  key_group = 'group';
  key_UserName = 'UserName';
  key_UserType = 'UserType';
  key_Password = 'Password';
  key_IPAddress = 'IPAddress';
  key_SessionId = 'SessionId';
  key_Mode="Mode";
  key_UserId= "UserId";
// key_SuperOrganisation= "SuperOrganisation";
key_SuperOrganisationId= "SuperOrganisationId";
key_JurisOrganisationId= "JurisOrganisationId";
key_ApprovalRequired= "ApprovalRequired";
key_UserCode= "UserCode";
key_DomainUserCode= "DomainUserCode";
// key_UserName= "UserName";
key_IsActive= "IsActive";
// key_emailId= "emailId";
// key_Password= "";
key_Country =  "Country";
key_Language= "Language";
key_Theme =  "Theme";
key_TimeZoneId = "TimeZoneId";
key_CreatedBy = "CreatedBy";
// key_UserType = "UserType";
key_Teams = "Teams";
key_Locations = "Locations";
key_UserAccessDT = "UserAccessDT";

  val_android = "android";
  val_ios = "ios";
  val_cbsType = 'flexcube';
  val_cbsTypeTcs = 'OMNI';
  val_cbsTypeFinacle = 'Finacle';
  val_mobPlatform = 'android';
  //val_mobPlatform = 'iOS';
  val_channelValueIB = 'IB';
  val_channelValueMOB = 'MOB';
  val_default_lang = 'en';
  
  val_entityId_UMOB = "UMOB";
  val_entityIDMob = 'RMOB';
  val_entityIDDesk = 'MIB';
  val_sessionKey = "sessionKey";

  val_mobileAppVersion = '1.0.0';
  val_mobileAppVersion_android = '1.0.0'; 
  val_mobileAppVersion_ios = '1.0.0'; 
  val_clientAppVersion = '1.0.0';
  val_latitude = '';
  val_longitude = '';
  val_requestType ='P';
  val_SuperOrganisation: "KIYA.AI";
  val_group: "Pune";
  val_UserName: "InfraAdmin";
  val_UserType: 1;
  val_Password: "InfraAdmin";
  val_IPAddress: "::1";
  val_SessionId: "";


  key_RRN = "RRN";
  key_referenceNumber = 'referenceNumber';
  key_MobileNoOrg = "MobileNoOrg";
  key_MobileNo = 'MobileNo';
  key_OTP = 'otpCode';
  key_otp ='otp';

  /**
   *
   * Validation pattern start
   *
   */
  ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9_.]*$/;
  ALPHA_NUMERIC_SPACE_REGEX = /^[a-zA-Z0-9 ]*$/;
  ALPHA_NUMERIC_SPACE_UPI_REGEX = /^[a-zA-Z0-9@. -]*$/;
  ALPHABET_REGEX = /^[a-zA-Z]*$/;
  ALPHABET_SPACE_REGEX = /^[a-zA-Z ]*$/;
  NUMERIC_REGEX = /^[0-9]*$/;
  NUMERIC_SPACE_REGEX = /^[0-9 ]*$/;
  ALPHA_NUMERIC_DOT_REGEX = /^[a-zA-Z0-9_.]*$/;

  /** Services name all constants */
  serviceName_CHECKFORNEWVERSIONONSTORE = 'Version/CHECKFORNEWVERSIONONSTORE';
  serviceName_LANGUAGEJSON = 'GENERICINFO/GETLANGUAGEDATA';//DATA
  serviceName_LANGUAGEJSONLIST = 'Version/LANGUAGEJSON';
  //serviceName_Login = 'LOGIN/OMNILOGIN';
  serviceName_Login = 'OMNIREGISTRATION/OMNILOGIN';
  serviceName_RESENDOTP = 'MHC/RESENDOTP';
  serviceName_OTPVERIFICATION = 'MHC/OTPVERIFICATION';
  serviceName_REGISTRATION = 'MHC/REGISTRATION';
  serviceName_CHECKUSERAVAILABILITY='MHC/CHECKUSERAVAILABILITY';
  serviceName_SETLOGINCREDENTIAL='MHC/SETLOGINCREDENTIAL';
  serviceName_REGISTRATIONCOMPLETE = 'MHC/REGISTRATIONCOMPLETE';


  /** storageEncryptKey is used for encryption purpose */
  storageEncryptKey = 'p$b@20#st0mni';
  /** mapEncryptKey is used for encryption purpose */
  sessionEncryptKey = '0mni@P$b#2020';
  mapEncryptKey = 'jrD@Mt6i';
  staticKey = "jrD@Mt6i#0mnip$b";
  languageKey = '@MrN$2Qi8R';
  InvalidSessionCode = "92";
  upiEncryptKey = "0d097c5eeef2466e";
  langStaticKey = "laN@Jv8k#Omnip$b";
  crmKey = "WsA&tg3q@oil2sD"


  /** storage key */
  storage_language = "language";
  storage_languageJson = "languageJson";
  storage_languageVersion = "languageVersion";
  storage_activityVersion = "activityVersion";
  storage_activityJson = "activityJson";
  storage_languageList = "languageList";
  storage_deviceId = "deviceId";
  storage_mobileNo = "mobileNo";
  deviceID = "1";
  defaultLanguageCode = 'en';
  ipAddress = "";

   /**Below are the static messages */
   SERVICE_UNAVAILABLE_MSG = "Service unavailable. Please try after sometime.";
   SERVICE_TIMEOUT_MSG = "Unable to connect to server. Please try after sometime..";
   SERVICE_SERVER_ERROR_MSG = "Internal Server Error";
   SERVICE_UNAUTHORIZED_MSG = "Not Authorized";
   SERVICE_BAD_REQ_MSG = "Bad Request";
   SERVICE_NOT_FOUND_MSG = "Not Found";
   SERVICE_METHOD_NOT_ALLOWED_MSG = "Method not allowed";
   SERVICE_METHOD_UNKNOWN_ERR_MSG = "Unknown Error. Please try after sometime..";
 
   /** Below are the constants for http status success and error code */
   Status = {
     SUCCESS: 200,
     ERR_CODE_BAD_REQUEST: 401,
     ERR_CODE_UNAUTHORIZED: 401,
     ERR_CODE_FORBIDDEN: 403,
     ERR_CODE_NOT_FOUND: 404,
     ERR_CODE_METHOD_NOT_ALLOWED: 405,
     ERR_CODE_SERVER_ERROR: 500,
     ERR_CODE_SERVER_UNAVAILABLE: 503,
     ERR_CODE_TIMEOUT: 408,
     ERR_CODE_UNKNOWN: 0,
   }

  getEntityId(key?: any) {
    console.log("getEntityId key => ", key);
    //return this.val_entityIDMob;
    if (window.hasOwnProperty('cordova')) {
      if (device.platform.toLowerCase() == this.val_android || device.platform.toLowerCase() == this.val_ios) {
        return key == null ? this.val_entityIDMob : this.val_entityId_UMOB;
      } else {
        return "";
      }
    } else {
      return key == null ? this.val_entityIDDesk : this.val_entityId_UMOB;
    }
  }

  getPlatform() {
    if (window.hasOwnProperty('cordova')) {
      return device.platform.toLowerCase();
    } else {
      return "web";
    }
    // return "web";
  }

}
