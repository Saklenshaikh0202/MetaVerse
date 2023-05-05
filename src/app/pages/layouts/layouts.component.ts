import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonMethods } from 'src/app/services/common-methods';
import { DataService } from 'src/app/services/data.service';
import { Layout } from './layout.types';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  layout: Layout = "classic";
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    public dataService: DataService,
    public commonMethod: CommonMethods,
  ) { }

  ngOnInit(): void {
    this._updateLayout();
  }

  private _updateLayout(): void
    {
      this._activatedRoute.data.subscribe(params => {
        const layoutFromQueryParam = (params['layout']);
        if ( layoutFromQueryParam )
        {
            this.layout = layoutFromQueryParam;
        }
        //console.log(params); 
      }
    );
    }
    closePopups(popupName){
      this.commonMethod.closePopup(popupName);
    }

}
