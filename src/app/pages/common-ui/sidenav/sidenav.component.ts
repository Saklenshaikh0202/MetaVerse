import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  mainMenuList:any=[];
  isSelectedRoute:string = 'dashboard';
    constructor(public router:Router,
    public dataService: DataService
      
      
      ) { }

  ngOnInit(): void {
    this.mainMenuList = [{
      "Status": "Active",
      "sequenceNo": "01",
      "menuName": "Home",
      "ID": "01",
      "type": "menu",
      "icon": "Home.svg",
      "route": "dashboard",
      "subMenu": []
    },{
      "Status": "Active",
      "sequenceNo": "02",
      "menuName": "Virtual Space",
      "ID": "01",
      "type": "menu",
      "icon": "virtual_space.svg",
      "route": "account",
      "subMenu": []
    },{
      "Status": "Inactive",
      "sequenceNo": "01",
      "menuName": "My Store",
      "ID": "01",
      "type": "menu",
      "icon": "my_store.svg",
      "route": "loanaccountdetail",
      "subMenu": []
    },{
      "Status": "Inactive",
      "sequenceNo": "01",
      "menuName": "Reports",
      "ID": "01",
      "type": "menu",
      "icon": "Reports.svg",
      "route": "reports",
      "subMenu": []
    },
    {
      "Status": "Inactive",
      "sequenceNo": "01",
      "menuName": "Feedback",
      "ID": "01",
      "type": "menu",
      "icon": "Feedback.svg",
      "route": "userGuide",
      "subMenu": []
    },
    {
      "Status": "Inactive",
      "sequenceNo": "01",
      "menuName": "Get Started",
      "ID": "01",
      "type": "menu",
      "icon": "get_started.svg",
      "route": "userGuide",
      "subMenu": []
    },
    {
      "Status": "Inactive",
      "sequenceNo": "01",
      "menuName": "Settings",
      "ID": "01",
      "type": "menu",
      "icon": "Settings.svg",
      "route": "userGuide",
      "subMenu": []
    },
    {
      "Status": "Inactive",
      "sequenceNo": "01",
      "menuName": "Mall Master",
      "ID": "01",
      "type": "menu",
      "icon": "Settings.svg",
      "route": "mallmaster",
      "subMenu": []
    },
    {
      "Status": "Inactive",
      "sequenceNo": "01",
      "menuName": "Mall Level",
      "ID": "01",
      "type": "menu",
      "icon": "Settings.svg",
      "route": "userGuide",
      "subMenu": []
    },
    {
      "Status": "Inactive",
      "sequenceNo": "01",
      "menuName": "Asset",
      "ID": "01",
      "type": "menu",
      "icon": "Settings.svg",
      "route": "userGuide",
      "subMenu": []
    }
  ]
  }

  goToPage(routeName: string){
    this.dataService.getBreadcrumb('sidenav', this.router.url)

    console.log(routeName, "jsjsjs")
    this.isSelectedRoute = routeName;
    // this.router.navigateByUrl("/"+routeName);
    this.router.navigate(["/" + routeName])
  }

}
