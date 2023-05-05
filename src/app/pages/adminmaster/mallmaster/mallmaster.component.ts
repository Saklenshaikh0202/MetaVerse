import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonMethods } from 'src/app/services/common-methods';

@Component({
  selector: 'app-mallmaster',
  templateUrl: './mallmaster.component.html',
  styleUrls: ['./mallmaster.component.scss']
})
export class MallmasterComponent {

  constructor(
    private _router: Router,
    // private DataService: DataService,
    private fbs: FormBuilder,
    private userSer: CommonMethods) { }

    ngOnInit(): void {
      this.userSer.getmallMaster().subscribe((data:any)=>{
    
        this.getData=data
        console.log(this.getData)
        console.log(data)
      })
    }

    openForm:boolean=false


    CreateMall = this.fbs.group({
      ModuleId: [1],
  
      MallName: ["", Validators.required],
  
      Area: ["", Validators.required],
  
      Location: ["", Validators.required],
  
      Address: ["", Validators.required],
  
    })
    showdata:boolean=false
searchText:string=""
getData:any=[]
    open(){
      debugger
      if(!this.openForm){
this.openForm=true
      }else{
        this.openForm=false
      }
    }

    hidedata(){
      if(this.showdata){
        this.showdata=false
      }
    }
    
Id=2;
    search(){
    
      this.showdata=true
     
if(this.searchText==null || this.searchText==""){
  this.userSer.getmallMaster().subscribe((data:any)=>{
    
    this.getData=data
    console.log(this.getData)
    console.log(data)
  })
}else{
  this.userSer.getmallMaster().subscribe(
    
    // this.showdata=true
    (data: any) => {
      console.log(data)
      console.log(this.searchText)
      this.getData=data.filter((res:any)=>res.MallName.toLowerCase().includes(this.searchText))
      console.log(this.getData)
      if(this.getData==null){
        this.openForm=false
      }
    
  })
} 
    }

    addMall(){
      this.userSer.postHomeData({
        ModuleId: this.CreateMall?.value.ModuleId,
        MallName:this.CreateMall?.value.MallName,
        Area: this.CreateMall?.value.Area,
        Location: this.CreateMall?.value.Location,
        Address: this.CreateMall?.value.Address
      }).subscribe({
  
        next: (data: any) => {
          console.log(data)
          this.CreateMall.disable()
        },
  
        error: (err: any) => {
          // Swal.fire('Error',
          //   'Something went wrong',
          //   'error')
          alert(err)
        }
      })
    }

}
