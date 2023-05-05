import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Layout } from '../layout.types';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'unity-layout',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.scss']
})
export class UnityComponent {
  layout:Layout="unity"
  @Input() item = false;
  notify : boolean = false;
  constructor(  private _activatedRoute: ActivatedRoute,private _router: Router,) { }

  ngOnInit(): void {
    this._updateLayout();
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

  private _updateLayout(): void {
    this._activatedRoute.data.subscribe(params => {
      const layoutFromQueryParam = (params['layout']);
      if (layoutFromQueryParam) {
        this.layout = layoutFromQueryParam;
      }
      //console.log(params); 
    }
    );
  }
}
