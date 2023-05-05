import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-registrationhomepage',
  templateUrl: './registrationhomepage.component.html',
  styleUrls: ['./registrationhomepage.component.scss']
})
export class RegistrationhomepageComponent {
  constructor(
    private _router: Router,
    private DataService: DataService,
    private fbs: FormBuilder) { }

  ngOnInit(): void {

  }

  // ModuleId INT NOT NULL,
  //     MallName Nvarchar(50) NOT NULL,
  //     Area Nvarchar(100)  NULL,
  //     Location Nvarchar(100)  NULL,
  //     Address Nvarchar(100)  NULL,
  CreateOrg = this.fbs.group({
    ModuleId: [1],

    FirstName: ["", Validators.required],

    Lastname: ["", Validators.required],

    Designation: ["", Validators.required],

    EmailAddress: ["", Validators.required],
    
    Phonenumber: ["", Validators.required],

  })
  @Output() orgdetails = new EventEmitter<string>();

  getData(obj: any) {
    this.sendData(obj)
  }

  sendData(obj: any) {
    this.orgdetails.next(obj)
  }

  goToPage(page: any) {
    this.changStep(page);

  }
  changStep(page: any) {

    this.nextEvent.next(page);
  }
  @Output() nextEvent = new EventEmitter<number>();

}