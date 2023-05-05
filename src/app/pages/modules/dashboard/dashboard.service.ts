import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getUserDetail(){
    var UserDetail;
    UserDetail={
      ModuleAccess:{},
      JurisOrganisationId:0,
      UserId:0,
      GroupName:"",
      Is2FAEnabled:false,
      UserCode:"",
      DomainUser:"",
      UserName:"",
      IsActive:false,
      InvalidAttempts:0,
      EmailId:"",
      Language:"",
      Theme:"",
      PasswordExpDate:"",
      Team:"",
      Location:"",
      s_LogoPath:"",
      s_CSS:"",
      ReportingManagerCode:"",
      ReportingManager:"",
      StatusCode:0,
      UserRole:"",
      UserRoleName:"",
      TimeZoneId:"",
      UserType:0,
      IsSuperAdmin:false,
      IsConfigurationAdmin:false
    }
  }

  getToken(){
      
  }
}
