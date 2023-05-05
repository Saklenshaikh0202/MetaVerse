import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userProfile:boolean = false;
  flag:boolean = false;
  data: boolean = false;
  @Output() newItemEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  toggleFullscreen(){
    var elem = document.documentElement;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      elem.requestFullscreen();
    }
  }
  notify(){
    this.data=true;
  }

  addNewItem(value: boolean) {
    this.newItemEvent.emit(value);
  }

  goTopage(link){
    location.reload();
  }
 
}
