import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constant';
import { TranslatePipe } from 'src/app/pipes/translate.pipe';
import { CommonMethods } from 'src/app/services/common-methods';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.scss']
})
export class RegistrationSuccessComponent implements OnInit{

  constructor(
    public dataService:DataService,
    private constant: AppConstants,
    private router: Router,
    private storage: LocalStorageService,
    public commonMethod: CommonMethods,
    private http: HttpRestApiService,
    private translate: TranslatePipe,
    
    ) { }

  ngOnInit(): void {
  }

  gotoLogin(){
    console.log("loginagain");
    this.router.navigateByUrl('/login');
    
  }
}
