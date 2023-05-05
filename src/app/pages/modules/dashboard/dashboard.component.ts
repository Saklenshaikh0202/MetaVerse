import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/services/data.service';
import { Chart,registerables,ChartData, ChartEvent, ChartType,ChartConfiguration } from 'chart.js';  // https://valor-software.com/ng2-charts/#DoughnutChart
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { CommonMethods } from 'src/app/services/common-methods';
Chart.register(...registerables);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  UserDetails={ModuleAccess:{
    AccessAllowed:false,
    ModuleId :0,
    ModuleName :"",
    ModuleDesc :"",
    SiteUrl :"",
    UserRole :"",
    UserRoleName :"",
    Is2FAReq :false,
    LicenseStatus :"",
    LicenseValidity :0,
    ModuleIcon :"",
    ContentHeadline :"",
    ContentOverview :"",
    Sequence :0,
    IsValidLicense :false,
    IsSuperAccess :false,
    TestURL :""
  },
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
vsAuthKey:string
url:string
Token:any
InfraAuthLoginURL:string="http://sezfatca/metaverse/"
Unauthorized="/Login/Login?Unauthorized=Unauthorized"
    constructor(public dataService: DataService,private actroute:ActivatedRoute,private userSer: CommonMethods,
      private route:Router,private payloadDetails:DashboardService) { }
// build:any="CL_01"
  ngOnInit(): void {
    
  }
   payloadDetail = this.payloadDetails.getUserDetail();

    // SSO:any;
  ex:any
  SSO (AuthS:any, AuthE:any, Parm1:any, Parm2:any, Parm3:any, Parm4:any, Parm5:any, 
    Parm6:any, Parm7:any, Parm8:any, Parm9:any, Parm10:any, Parm11:any, Parm12:any, Parm13:any, 
    Parm14:any, Parm15:any, Parm16:any, Parm17:any, Parm18:any)
        {
            this.vsAuthKey = AuthS;
            this.vsAuthKey += "." + Parm1;
            this.vsAuthKey += Parm2;
            this.vsAuthKey += Parm3;
            this.vsAuthKey += Parm4;
            this.vsAuthKey += Parm5;
            this.vsAuthKey += Parm6;
            this.vsAuthKey += Parm7;
            this.vsAuthKey += Parm8;
            this.vsAuthKey += Parm9;
            this.vsAuthKey += Parm10;
            this.vsAuthKey += Parm11;
            this.vsAuthKey += Parm12;
            this.vsAuthKey += Parm13;
            this.vsAuthKey += Parm14;
            this.vsAuthKey += Parm15;
            this.vsAuthKey += Parm16;
            this.vsAuthKey += Parm17;
            this.vsAuthKey += Parm18;
            this.vsAuthKey += "." + AuthE;

            this.url = this.InfraAuthLoginURL + this.Unauthorized;
            if (this.vsAuthKey != "")
            {
                // JWTToken objToken = new JWTToken
                {
                    this.Token = this.vsAuthKey
                };
                
                   

                    this.payloadDetails=this.tokenValidator();
                    

                    if (this.UserDetails != null && this.UserDetails.ModuleAccess != null)

                    {
                        // var moduleDetails = this.ModuleAccess.filter((x:any) => x.ModuleName == moduleName);
                        if (this.UserDetails.ModuleAccess.ModuleName != null && this.UserDetails.ModuleAccess.AccessAllowed)
                        {
                          
                            sessionStorage.setItem["Token"] = this.Token;
                            sessionStorage.setItem["UserRole"] = this.UserDetails.ModuleAccess.UserRole;
                            sessionStorage.setItem["UserRoleName"] = this.UserDetails.ModuleAccess.UserRoleName;
                            sessionStorage.setItem["UserName"] = this.UserDetails.UserName;
                            sessionStorage.setItem["UserCode"] = this.UserDetails.UserType == 0 ? this.UserDetails.UserCode : this.UserDetails.DomainUser;
                            sessionStorage.setItem["UserId"] = this.UserDetails.UserId;
                            sessionStorage.setItem["GroupOfficeId"] = this.UserDetails.JurisOrganisationId;
                            sessionStorage.setItem["GroupOfficeName"] = this.UserDetails.GroupName;
                            sessionStorage.setItem["Language"] = this.UserDetails.Language;
                            sessionStorage.setItem["Theme"] = this.UserDetails.Theme;
                            sessionStorage.setItem["IsAccessAllowed"] = this.UserDetails.ModuleAccess.AccessAllowed;
                            sessionStorage.setItem["ModuleCode"] = this.UserDetails.ModuleAccess.ModuleId;
                            sessionStorage.setItem["EmailId"] = this.UserDetails.EmailId;
                            sessionStorage.setItem["TimeZoneId"] = this.UserDetails.TimeZoneId;
                            sessionStorage.setItem["UserType"] = this.UserDetails.UserType;
                            sessionStorage.setItem["IsSuperAdmin"] = this.UserDetails.IsSuperAdmin;
                            sessionStorage.setItem["IsConfigurationAdmin"] = this.UserDetails.IsConfigurationAdmin;
                            sessionStorage.setItem["IsSuperAccess"] = this.UserDetails.ModuleAccess.IsSuperAccess;

                            // this.SetUserLoginAudit(this.JurisOrganisationId, this.UserCode);

                            //SetTemplateTypes(moduleDetails.ModuleId);

                            // this.SetUserMenu();


                            //SetUserGroups();

                            //SetAppVersions();

                            // return RedirectToAction("Dashboard", "Dashboard");
                        }
                        else
                        {
                            return  window.location.href=(this.url);
                        }
                    }
                    else
                    {
                        return window.location.href=(this.url);;
                    }
                
                
            }
            else
            {
                return window.location.href=(this.url);
            }
        }
        // private SetUserLoginAudit(groupOfficeId:number, userCode:string)
        // {
        //     /*------Calling API to Create Login Audit-----*/
        //     UserLoginAuditRequest userLoginAuditRequest = new UserLoginAuditRequest()
        //     {
        //         JurisOrganisationId = groupOfficeId,
        //         UserCode = userCode,
        //         UserId = SessionInfo.UserId,
        //         ModuleId = SessionInfo.ModuleCode,
        //         IPAddress = Request.UserHostAddress,
        //         SessionId = Session.SessionID,
        //     };
        //     clsauth.CreateUserLoginAudit(userLoginAuditRequest);

        //     /*------Calling API to get Login Audit Details-----*/
        //     var loginAudit = clsauth.GetUserLoginAudit(userLoginAuditRequest);
        //     Session["LastLogin"] = loginAudit.LastLoginTime.HasValue ? TimeZoneInfo.ConvertTimeFromUtc(loginAudit.LastLoginTime.Value, SessionInfo.TimeZone) : (DateTime?)null;
        //     Session["CurrentLogin"] = loginAudit.CurrentLoginTime.HasValue ? TimeZoneInfo.ConvertTimeFromUtc(loginAudit.CurrentLoginTime.Value, SessionInfo.TimeZone) : (DateTime?)null;

        //     /*---------------------END---------------------------*/
        // }

        // private SetUserMenu()
        // {
        //     // Get User Menu
        //     IAdmin bALAdmin = new AdminBL(SessionInfo.Token);
        //     var userMenus = bALAdmin.GetMenuByCriteria(new Customer_Journey_Model.Admin.GetMenuRequest() { GroupOfficeId = SessionInfo.GroupOfficeId, ModuleCode = SessionInfo.ModuleCode, RoleId = SessionInfo.UserRole }); // New TaxReg
        //                                                                                                                                                                                                           // var userMenus = bALAdmin.GetUserMenu(new BORT_V2.Models.Admin.GetMenuRequest() { GroupOfficeId = SessionInfo.JurisOrgId, ModuleCode = SessionInfo.ModuleCode, RoleId = SessionInfo.UserRole }); // Old TaxReg
        //     Session["UserMenus"] = userMenus;
        // }
        obj = {
          SuperOrganisation: "Infrasoft",
          group: "DEV",
          UserName: "TestUser002",
          UserType: 1,
          Password: "36Vn+28MoNyhVn9K2xHD9Q==",
          IPAddress: "::1",
          SessionId: "",
          AllowedAttempts:0,
          MaxInActivityDays:0
        }
        token:any
        tokenValidator() {

          this.userSer.authenticate({
            UserData:this.UserDetails,
            Token:localStorage.getItem("token")
          }).subscribe((res) => {
      
            this.token = res;
      
            console.log(res)
            // console.log(this.signuser?.value.Mode,)
      
            // localStorage.setItem("token", this.token.AccessToken)
      
            return res;
      
          })
          return this.token
      
          // console.log(localStorage.getItem("token"))
      
        }

  ngAfterViewInit() {

  }

  goToPage(routelink){

  }



 

  gotoMeta(){
    this.route.navigate(
['/metastore'],
{queryParams:{ID:'CL_01'}}
    );
  }

  gotoMetaBuild(){
    this.route.navigate(['/metastore'],{queryParams:{ID:'CL_00'}}  
    );
  }
 
  
}




