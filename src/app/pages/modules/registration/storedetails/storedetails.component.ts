import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonMethods } from 'src/app/services/common-methods';
// import { EmailValidator } from '@angular/forms';
import { emailValidator } from './email-Validation';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { AppConstants } from 'src/app/app.constant';
import { RegistrationhomepageComponent } from '../registrationhomepage/registrationhomepage.component';

@Component({
  selector: 'app-storedetails',
  templateUrl: './storedetails.component.html',
  styleUrls: ['./storedetails.component.scss']
})
export class StoredetailsComponent {

  // fb: any;
  userFile1: any = File;

  userFile2: any = File;
  userFile3: any = File;

  userFile4: any = File;
  constructor(private sanitizer: DomSanitizer, private constant: AppConstants, private route: Router, private fbs: FormBuilder,
    private userSer: CommonMethods, private http: HttpRestApiService) { }

  url: string = '../../../assets/pic.jpg'
  url1: string = '../../../assets/pic.jpg'

  signuser = this.fbs.group({

    Mode: ["I", Validators.required],

    SuperOrganisationId: [1, Validators.required],

    SuperOrganisation: ["dev", Validators.required],

    JurisOrganisationId: [1, Validators.required],

    ApprovalRequired: [false, Validators.required],

    UserId: [0, Validators.required],

    UserCode: ["", Validators.required],

    DomainUserCode: ["", Validators.required],

    UserName: ["", Validators.required],




    Password: ["", Validators.required],

    IsActive: ["Y", Validators.required],


    Country: ["IN", Validators.required],

    Language: ["en-US"],

    Theme: ["Light"],

    TimeZoneId: ["India Standard Time"],

    CreatedBy: ["InfraAdmin"],

    UserType: [0],

    Teams: [null],

    Locations: [null],

    UserAccessDT: [null],

  })

  CreateOrg = this.fbs.group({

    // ModuleId: [1],
    // GroupOfficeID: [1],

    // CompanyName: ["", Validators.required],

    StoreName: ["", Validators.required],

    StoreLogo: ["", Validators.required],
    StoreBanner: ["", Validators.required],

    StoreCategory: ["", Validators.required],

    StoreDescription: ["", Validators.required],

    // Status: [true, Validators.required],
    // Email: ["", [Validators.required, Validators.email, emailValidator()]],
    // RegistrationNo: [0, Validators.required],
    // RegisterType: ["Company"],
    // GSTNo: ["", Validators.required]
    // CreatedBy: [""],

    // TaxregUserId: [0, Validators.required]




  })

  // {
  //   "ModuleId": 0,
  //   "GroupOfficeID": 0,
  //   "CompanyName": "string",
  //   "StoreName": "string",
  //   "StoreLogo": "string",
  //   "StoreCategory": "string",
  //   "StoreDescription": "string",
  //   "Status": true,
  //   "Email": "string",
  //   "Address": "string",
  //   "RegistrationNo": 0,
  //   "GSTNo": "string"
  // }




  get CompanyName() {

    return this.CreateOrg.get('CompanyName')

  }

  get StoreName() {

    return this.CreateOrg.get('StoreName')

  }

  get StoreLogo() {

    return this.CreateOrg.get('StoreLogo')

  }

  get StoreCategory() {

    return this.CreateOrg.get('StoreCategory')

  }

  get StoreDescription() {

    return this.CreateOrg.get('StoreDescription')

  }

  get GroupOfficeID() {

    return this.CreateOrg.get('GroupOfficeID')

  }

  get RegistrationNo() {

    return this.CreateOrg.get('RegistrationNo')

  }

  get Status() {

    return this.CreateOrg.get('Status')

  }

  get GSTNo() {

    return this.CreateOrg.get('GSTNo')

  }

  get ModuleId() {

    return this.CreateOrg.get('ModuleId')

  }

  get Email() {

    return this.CreateOrg.get('Email')

  }

  // get Mode() {

  //   return this.signuser.get('Mode')

  // }

  // get SuperOrganisationId() {

  //   return this.signuser.get('SuperOrganisationId')

  // }

  // get SuperOrganisation() {

  //   return this.signuser.get('SuperOrganisation')

  // }

  // get JurisOrganisationId() {

  //   return this.signuser.get('SuperOrganisation')

  // }

  // get ApprovalRequired() {

  //   return this.signuser.get('ApprovalRequired')

  // }

  // get UserId() {

  //   return this.signuser.get('UserId')

  // }

  // get UserCode() {

  //   return this.signuser.get('UserCode')

  // }

  // get DomainUserCode() {

  //   return this.signuser.get('DomainUserCode')

  // }

  // get UserName() {

  //   return this.signuser.get('UserName')

  // }



  // get Password() {

  //   return this.signuser.get('Password')

  // }

  // get IsActive() {

  //   return this.signuser.get('IsActive')

  // }

  // get Country() {

  //   return this.signuser.get('Country')

  // }

  // get Language() {

  //   return this.signuser.get('Language')

  // }

  // get Theme() {

  //   return this.signuser.get('Theme')

  // }

  // get TimeZoneId() {

  //   return this.signuser.get('TimeZoneId')

  // }

  // get CreatedBy() {

  //   return this.signuser.get('CreatedBy')

  // }

  // get UserType() {

  //   return this.signuser.get('UserType')

  // }

  // get Teams() {

  //   return this.signuser.get('Teams')

  // }

  // get Locations() {

  //   return this.signuser.get('Locations')

  // }

  // get UserAccessDT() {

  //   return this.signuser.get('UserAccessDT')

  // }

  userData = this.signuser.value

  token: any;

  obj = {
    SuperOrganisation: "Infrasoft",
    group: "DEV",
    UserName: "TestUser002",
    UserType: 1,
    Password: "36Vn+28MoNyhVn9K2xHD9Q==",
    IPAddress: "::1",
    SessionId: "",
    AllowedAttempts: 0,
    MaxInActivityDays: 0
  }

  // val_SuperOrganisation: "KIYA.AI";

  // val_group: "Pune";

  // val_UserName: "InfraAdmin";

  // val_UserType: 1;

  // val_Password: "InfraAdmin";

  // val_IPAddress: "::1";

  // val_SessionId: "";
  tokenValidator() {

    this.userSer.getToken(this.obj).subscribe((res) => {
      debugger
      this.token = res;

      console.log(res)
      console.log(this.signuser?.value.Mode,)

      localStorage.setItem("token", this.token.AccessToken)

      return this.token.AccessToken;

    })

    console.log(localStorage.getItem("token"))

  }

  // MTK.tbl_Asset 

  //  public int AssetGroupLevelID :-1
  //         public string Name :- "ShopNo101"
  //         public string Shape:- "Rectangle"
  //         public int SizeWide :- 10
  //         public int SizeLong :- 20
  //         public int Area :- 200


  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';




  generateString(length: number) {

    let result = '';

    const charactersLength = this.characters.length;

    for (let i = 0; i < length; i++) {
      result += this.characters.charAt(Math.floor(Math.random() * charactersLength));

    }




    return result;

  }

  // org=this.CreateUser

  pass: any = this.generateString(10)
  sendpassword() {
    this.userSer.sendPasswordToUser({
      "Subject": "Password",
      "Body": "this.pass",
      "ToEmail": "saklen.shaikh@kiya.ai",
      "CCEmail": "",
      "Attachments": [
        "string"
      ],
      "AttachmentsData": [
        {
          "Name": "string",
          "NameEncoding": {
            "m_codePage": 0,
            "dataItem": {
              "m_dataIndex": 0,
              "m_uiFamilyCodePage": 0,
              "m_webName": "string",
              "m_headerName": "string",
              "m_bodyName": "string",
              "m_flags": 0
            },
            "m_isReadOnly": true,
            "encoderFallback": {
              "bIsMicrosoftBestFitFallback": true
            },
            "decoderFallback": {
              "bIsMicrosoftBestFitFallback": true
            }
          },
          "ContentDisposition": {
            "DispositionType": "string",
            "Parameters": [
              {}
            ],
            "FileName": "string",
            "CreationDate": "2023-04-26T06:54:46.985Z",
            "ModificationDate": "2023-04-26T06:54:46.985Z",
            "Inline": true,
            "ReadDate": "2023-04-26T06:54:46.985Z",
            "Size": 0
          },
          "ContentStream": {
            "__identity": {}
          },
          "ContentId": "",
          "ContentType": {
            "Boundary": "string",
            "CharSet": "string",
            "MediaType": "string",
            "Name": "string",
            "Parameters": [
              {}
            ]
          },
          "TransferEncoding": 0
        }
      ],
      "GroupOfficeId": 0,
      "ModuleId": 0,
      "EmailTemplate": "string",
      "CreatedBy": "string"
    }).subscribe({
      next: (res: any) => {
        console.log(res)
      }
    })
  }
  //   signin() {
  //    var data = {

  //         Mode: this.Mode?.value,

  //         SuperOrganisationId: this.SuperOrganisationId?.value,

  //         SuperOrganisation: this.SuperOrganisation?.value,

  //         JurisOrganisationId: this.JurisOrganisationId?.value,

  //         ApprovalRequired: this.ApprovalRequired?.value,

  //         UserId: this.UserId?.value,

  //         UserCode: this.UserName?.value,

  //         DomainUserCode: this.emailId?.value,

  //         UserName: this.UserName?.value,

  //         emailId: this.emailId?.value,

  //         Password: this.pass,

  //         IsActive: this.IsActive?.value,

  //         Country: this.Country?.value,

  //         Language: this.Language?.value,

  //         Theme: this.Theme?.value,

  //         TimeZoneId: this.TimeZoneId?.value,

  //         CreatedBy: this.CreatedBy?.value,

  //         UserType: this.UserType?.value,

  //         Teams: this.Teams?.value,

  //         Locations: this.Locations?.value,

  //         UserAccessDT: this.UserAccessDT?.value,
  //     }

  //     var data1={
  //        GroupOfficeID: this.GroupOfficeID?.value,

  //       CompanyName: this.UserName?.value,

  //       StoreName: this.StoreName?.value,

  //       StoreLogo: this.url,

  //       StoreCategory: this.StoreCategory?.value,


  //       StoreDescription: this.StoreDescription?.value,

  //       ActiveStatus: this.ActiveStatus?.value,

  //       RegisterType: this.RegisterType?.value,

  //       Email: this.emailId?.value,

  //       Password: this.pass,

  //       TaxregUserId: this.TaxregUserId?.value
  //     }

  //     this.http.apiCall1('api/Admin/CreateUpdateUserMaster',data).then((response) => {
  // console.log(JSON.stringify(response))
  //         this.tokenValidator()

  //     })

  //     console.log(this.signuser.value)

  //     this.http.apiCall('api/Register/CreateRegistration-company',data1).then((response) => {
  // console.log(JSON.stringify(response))
  //       // this.tokenValidator()
  //       this.route.navigate(['/login'])
  //   })


  // next: (data: any) => {

  //   console.log(data)

  //   console.log(this.pass)
  //   // this.sendpassword()


  //       }
  @Input()
  homedata: any

  @Input()
  poidata: any

  @Input()
  memberdata: any
  // nextstep(obj:any){
  // this.homedata=obj
  // }
  error: string = "Some thing is wrong, Please try again later..."
  stop: boolean = true;


  //   this.userSer.registerUser({

  //     [this.constant.key_Mode]:this.Mode?.value,
  //     [this.constant.key_UserId]:this.UserId?.value,
  //   [this.constant.key_SuperOrganisation]:this.SuperOrganisation?.value,
  //   [this.constant.key_SuperOrganisationId]:this.SuperOrganisationId?.value,
  //   [this.constant.key_JurisOrganisationId]:this.JurisOrganisationId?.value,
  //   [this.constant.key_ApprovalRequired]:this.ApprovalRequired?.value,

  //   [this.constant.key_UserCode]:this.UserName?.value,
  //   [this.constant.key_DomainUserCode]:this.emailId?.value,
  //   [this.constant.key_UserName]:this.UserName?.value,
  //   [this.constant.key_IsActive]:this.IsActive?.value,
  //   [this.constant.key_emailId]:this.emailId?.value,
  //   [this.constant.key_Password]:this.pass,
  // [this.constant.key_Country] : this.Country?.value,
  // [this.constant.key_Language]:this.Language?.value,
  // [this.constant.key_Theme] : this.Theme?.value,
  // [this.constant.key_TimeZoneId] :this.TimeZoneId?.value,
  // [this.constant.key_CreatedBy] :this.CreatedBy?.value,
  // [this.constant.key_UserType] :this.UserType?.value,
  // [this.constant.key_Teams] :this.Teams?.value,
  // [this.constant.key_Locations] :this.Locations?.value,
  // [this.constant.key_UserAccessDT] :this.UserAccessDT?.value,

  //   }).subscribe({
  //     next: (data: any) => {
  //       this.tokenValidator()
  //       console.log(data)
  //       Swal.fire('Success',
  //         'You Have Sign Up Succesfully',
  //         'success')

  //     },
  //     error: ()=>{
  //       alert(this.error)
  //       this.stop=false
  //     }
  //   })
  //   console.log(this.signuser.value)
  signin() {
    this.userSer.createOrg({
      // ModuleId: this.ModuleId?.value,
      // GroupOfficeID: this.GroupOfficeID?.value,
      // CompanyName: this.CompanyName?.value,
      StoreName: this.StoreName?.value,
      StoreDescription: this.StoreDescription?.value,
      StoreCategory: this.StoreCategory?.value,
      StoreLogo: this.url,
      StoreBannerImage:this.url1,
      // Status: this.Status?.value,
      // RegistrationNo: this.RegistrationNo?.value,
      // Email: this.Email?.value,
      // GSTNo: this.GSTNo?.value
    }).subscribe({
      next: (data: any) => {
        if (this.stop) {
          console.log(data)

          console.log(this.pass)
          // window.location.href="http://sezfatca/Metaverse/"
         
        }
      },

      error: (err: any) => {
        // Swal.fire('Error',
        //   'Something went wrong',
        //   'error')
        alert(err)
      }

    })

    // this.userSer.postAssetgroup({
    //   AssetGroupLevelID: 1,
    //   Name: "ShopNo108",
    //   Shape: "Rectangle",
    //   SizeWide: 10,
    //   SizeLong: 20,
    //   Area: 200
    // }).subscribe({
    //   next: (data: any) => {
    //     console.log(data)
    //   },
    //   error: (err: any) => {
    //     // Swal.fire('Error',
    //     //   'Something went wrong',
    //     //   'error')
    //     alert(err)
    //   }
    // })

    // [CustomerEntityId] [int] NOT NULL,
    //     [RoleName] [nvarchar](100) NULL,
    //     [RoleDescription] [nvarchar](100) NULL,
    // this.userSer.postRoleEntity({
    //   "ModuleId": 1,
    //   "RoleName": "Admin",
    //   "RoleDescription": "Admin User"
    // }).subscribe({
    //   next: (data: any) => {
    //     console.log(data)
    //   },

    //   error: (err: any) => {
        // Swal.fire('Error',
        //   'Something went wrong',
        //   'error')
    //     alert(err)
    //   }
    // })
    // debugger
    this.userSer.postBuisenessDetails({
      BusinessName: this.memberdata.BusinessName,

      BusinessType: this.memberdata.Businesstype,

      BusinessPhoneNumber: this.memberdata.MobileNo,

      BusinessEmailAddress:this.memberdata.Email,

 
      Address:this.memberdata.AddressLine1,
      City:this.memberdata.City,

      State:this.memberdata.State,

      ZipCode:this.memberdata.Zip,

      Country:this.memberdata.Country,

      BusinessWebsite:this.memberdata.Businesswebsite,

      TaxID:this.memberdata.TaxID,

      CompRegistartionNo:this.memberdata.CompRegistartionNo,

 

    }).subscribe({

      next: (data: any) => {
console.log(this.memberdata)
        console.log(data)
        this.route.navigate(['/login'])
      },

      error: (err: any) => {
        // Swal.fire('Error',
        //   'Something went wrong',
        //   'error')
        alert(err)
      }
    })

    // this.userSer.postPoiList({
    //   AssetGroupId: this.poidata.AssetGroupId,
    //   PlaceDescription: this.poidata.PlaceDescription,
    //   PlaceDistanceInMeters: this.poidata.PlaceDistanceInMeters
    // }).subscribe({

    //   next: (data: any) => {
    //     console.log(data)
    //   },

    //   error: (err: any) => {
        // Swal.fire('Error',
        //   'Something went wrong',
        //   'error')
    //     alert(err)
    //   }
    // })

    // this.userSer.postModule({
    //   "OwnerGroupId": 1,
    //   "Name": "MetaToolKit3"
    // }).subscribe({

    //   next: (data: any) => {
    //     console.log(data)
    //   },

    //   error: (err: any) => {
        // Swal.fire('Error',
        //   'Something went wrong',
        //   'error')
    //     alert(err)
    //   }
    // })

    // this.userSer.postMemberData({

    //   "CustomerEntityId": this.memberdata.CustomerEntityId,
    //   "UserName": this.memberdata.UserName,
    //   "Email": this.memberdata.Email,
    //   "MobileNo": this.memberdata.MobileNo,
    //   "CustomerEntityRoleId": this.memberdata.CustomerEntityRoleId

    // }).subscribe({

    //   next: (data: any) => {
    //     console.log(data)
    //   },

    //   error: (err: any) => {
        // Swal.fire('Error',
        //   'Something went wrong',
        //   'error')
    //     alert(err)
    //   }
    // })

    // this.userSer.postOwnerGroup({

    //   Name: this.CompanyName.value

    // }).subscribe({

    //   next: (data: any) => {
    //     console.log(data)
    //     window.location.href = "http://sezfatca/Metaverse/"
    //   },

      // error: (err: any) => {
        // Swal.fire('Error',
        //   'Something went wrong',
        //   'error')
    //     alert(err)
    //   }
    // })

  }


  goToPage(page: any) {
    this.changStep(page);

  }
  changStep(page: any) {

    this.nextEvent.next(page);
  }
  @Output() nextEvent = new EventEmitter<number>();






  onFileSelect1(file1: any) {

    if (file1.target.files) {

      const reader1 = new FileReader();

      reader1.readAsDataURL(file1.target.files[0]);

      reader1.onload = (event: any) => {

        this.url1 = event.target.result;

      }

    }

    const filedata1 = file1.target.files[0];

    console.log(filedata1);

    console.log(file1);

  }






  onFileSelect(file: any) {

    if (file.target.files) {

      const reader = new FileReader();

      reader.readAsDataURL(file.target.files[0]);

      reader.onload = (event: any) => {

        this.url = event.target.result;

      }

    }

    const filedata = file.target.files[0];

    console.log(filedata);

    console.log(file);

  }
}
