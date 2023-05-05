import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tearmsandconditions',
  templateUrl: './tearmsandconditions.component.html',
  styleUrls: ['./tearmsandconditions.component.scss']
})
export class TearmsandconditionsComponent {
  constructor(
    private _router: Router,
    private DataService: DataService,
    private fb: FormBuilder) { }

  ngOnInit(): void {

  }

 

  regmember = this.fb.group({
    Businesstype: ["",Validators.required],

    BusinessName: ["", Validators.required],

    Email: ["", Validators.required],
    MobileNo: ["", Validators.required],
   
      AddressLine1:["",Validators.required],
City:["",Validators.required],
State:["",Validators.required],
Zip:["",Validators.required],
Country:["",Validators.required],
Businesswebsite:["",Validators.required],
TaxID:["",Validators.required],
CompRegistartionNo:["",Validators.required],
   
    // CustomerEntityRoleId: [1, Validators.required],

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