import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'classic-layout',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent implements OnInit {
  @Input() item = false;
  notify : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }  
  
  addItem(newItem: boolean) {
    console.log(newItem)
    this.notify = newItem;
    this.emitEventToChild()
  }

eventsSubject: Subject<void> = new Subject<void>();

emitEventToChild() {
  this.eventsSubject.next();
}

  

}
