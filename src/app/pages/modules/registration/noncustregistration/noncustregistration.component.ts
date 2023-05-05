import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-noncustregistration',
  templateUrl: './noncustregistration.component.html',
  styleUrls: ['./noncustregistration.component.scss']
})
export class NoncustregistrationComponent {
  constructor(
    private _router: Router,
    private DataService: DataService) { }

  ngOnInit(): void {

  }
  goToPage(page) {
    this.changStep();

  }
  changStep() {
    this.nextEvent.next(this.DataService.regIsAtStep);
  }
  @Output() nextEvent = new EventEmitter<number>();

}