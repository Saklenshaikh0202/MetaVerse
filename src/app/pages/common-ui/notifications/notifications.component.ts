import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  private eventsSubscription!: Subscription;
  @Input() events!: Observable<void>;
  notify: boolean=false;
  
  constructor() { }

  ngOnInit(){
    this.eventsSubscription = this.events.subscribe(() => {
      this.notify=true
      console.log(this.notify)
    });
  }
   onClose(){
    this.notify=false;
    console.log('closed----->');
   }
  
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
    this.notify=false
  }
  
}
