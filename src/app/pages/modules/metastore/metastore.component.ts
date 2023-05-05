import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, Inject } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


declare var createUnityInstance: any;
declare var window: any;

@Component({
  selector: 'app-metastore',
  templateUrl: './metastore.component.html',
  styleUrls: ['./metastore.component.scss']
})
export class MetastoreComponent implements OnInit, AfterViewInit  {
  IsMobilePlatform: any;



  @ViewChild('unityContainer') unityContainerRef: ElementRef | undefined;
  @ViewChild('unityCanvas') unityCanvasRef: ElementRef | undefined;
  @ViewChild('unityLoadingBar') unityLoadingBarRef: ElementRef | undefined;
  @ViewChild('progressBar') progressBarRef: ElementRef | undefined;
  @ViewChild('unityProgressBarFull') unityProgressBarFullRef: ElementRef | undefined;
  @ViewChild('unityMobileWarning') unityMobileWarningRef: ElementRef | undefined;
  @ViewChild('unitywarning') unityWarningRef: ElementRef | undefined;
  @ViewChild('img1') img1Ref: ElementRef | undefined;
  @ViewChild('imgfluid') imgfluidRef: ElementRef | undefined;
  @ViewChild('datamsg') datamsgRef: ElementRef | undefined;

  isBOM:boolean=false;
  buildUrl:any
  loaderUrl:any
  config:any
  container: any
  canvas: any
  loadingBar: any
  progressBar: any
  progressBarFull: any
  // fullscreenButton = document.querySelector("#unity-fullscreen-button");
  mobileWarning: any
  img1: any
  build:any
  
  imgfluid: any
  dataMsg: any
  loadUnity: boolean = false;
  avatarVal: number=0;
  loginValues: any;
  script: any = document.createElement("script");
  videoSrc: string = "assets/images/background/Bharatmeta-BG-video.mp4";
  bgVideoSrc: string = "assets/images/background/BharatmetaAnim.mp4";
  headerText: any;
  footerText: any;
  assetsSrc: any;
  ID:any
  cssURL: any;
  warningBanner: any;
  storeID:any
  constructor(@Inject(DOCUMENT) private _document:Document,
  private sanitizer: DomSanitizer, private actroute:ActivatedRoute,private route:Router) {
    // this.ID=this.route.getCurrentNavigation().extras.state['ID']
    const input = document.querySelector('#message') as HTMLInputElement | null;
    this.actroute.queryParams.subscribe(res=>{
      debugger
      this.ID=res['ID'];
      console.log(this.ID)
    })
  }

  gotoMetaBuild(){
    this.route.navigate(['/metastore'],{queryParams:{ID:'CL_00'}}  
    );
  }

  ngAfterViewInit() {
    this.loadUnity = false;
    this.container = this.unityContainerRef?.nativeElement;
    this.canvas = this.unityCanvasRef?.nativeElement;
    this.container = this.unityLoadingBarRef?.nativeElement;
    this.loadingBar = this.progressBarRef?.nativeElement;
    this.progressBarFull = this.unityProgressBarFullRef?.nativeElement;
    this.mobileWarning = this.unityMobileWarningRef?.nativeElement;
    this.warningBanner = this.unityWarningRef?.nativeElement;
    this.dataMsg = this.datamsgRef?.nativeElement;
    this.canvas!.style.background = "url('" + "assets/images/background" + "/bm.png') center / cover";
    this.loadingBar.style.display = "block";
    console.log(this.container, "this.container");
    this.callUnity();
  }
  
  ngOnInit(){
    console.log(this.ID)
    this.buildUrl = "assets/meta/Build";
    this.loaderUrl = this.buildUrl + "/ToolKit_V1.1.loader.js";
    this.config = {
      dataUrl: this.buildUrl + "/ToolKit_V1.1.data.unityweb",
      frameworkUrl: this.buildUrl + "/ToolKit_V1.1.framework.js.unityweb",
      codeUrl: this.buildUrl + "/ToolKit_V1.1.wasm.unityweb",
      streamingAssetsUrl: "assets/meta/StreamingAssets",
      companyName: "Kiya.AI",
      productName: "Toolkit",
      productVersion: "1.0",
      devicePixelRatio:1,
      showBanner: this.unityShowBanner,
      
    };

    // this.actroute.queryParamMap.subscribe(
    //   data=>{
    //   data=this.build
      
    //   console.log(data.get('build'))
    //       }
    //       );
    // this.build=this.actroute.queryParams.subscribe(data=>{
    //   this.ID=+data['ID']
    //   console.log(this.ID)
    // })
  }
   url="https://meta.kiya.ai/ToolKit_V1.0/index.html"

   callUnity() {
    this.loadUnity = !this.loadUnity;
    // var funnyDay = document.getElementById("funny-day");
    let list = ["We are now loading your metaverse experience,", "this might take some time based on your internet speed,", " please bear with us while we get this up and running."]//Function to output array  
    let index = 0;
    let callingMsg = setInterval(function () {
      console.log(this.dataMsg,"data msg")
      var text = (list[index++ % list.length]).toString();
      // this.dataMsg.innerHTML
      // $("#data").text(text)}, 1000);
      // document.getElementById("data").innerHTML = text 
    }, 3000);
   // $('#unity-container').show();
    // let userValues = this.authService.userData;
  //  console.log(userValues, "uservalues");
    //console.log( JSON.parse(userValues), "uservalues parsed");
    // $("#mainSec").addClass('hidden');

    // this.router.navigate(["verify"]);
    // window.location.href = this.authService.configdata.url;
    this.script.src = this.loaderUrl;
    this.script.onload = () => {

      createUnityInstance(this.canvas, this.config, (progress: any) => {
        this.progressBarFull.style.width = 100 * progress + "%";
      }).then((unityInstance: any) => {
        clearInterval(callingMsg)
        // this.loadingBar.style.display = "none";
        // this.progressBar.style.display = "none";
        // fullscreenButton.onclick = () => {
        //   unityInstance.SetFullscreen(1);
        // };
        // let sessionData = {
        //   "uuid": this.authService.uuid,
        //   "secretKey": this.authService.initializeString,
        //   "domainName": this.authService.configdata.domainName,
        //   "data":this.authService.addUserResponse,
        //   "avatarValue":this.avatarVal,
        //   "chatbotBaseURL":this.authService.configdata.chatbotBaseURL,
        //   "mediaBaseURL":this.authService.configdata.mediaBaseURL,
        // }
        // let sessionData = {
        //   "DisplayName": " test user",
        //   "avatarValue":this.avatarVal,
        //   "sessionId": this.authService.globalSessionId,
        //   "userId": this.authService.globalUserId,
        //   "acquirer":this.authService.configdata.acquirer
        // }

        // let finaldata = {
        //   "data":this.authService.encryptUsingAES256(this.loginValues)
        // }
        
        window.unityInstance = unityInstance;
        console.log(window.unityInstance.progress, 'unityInstance.progress');
        //send message with uservalues
        // // unityInstance.SendMessage("AvatarHandler", "SpawnAvatar", this.avatarVal);
        unityInstance.SendMessage("LayoutHandler", "SetShopPreset", this.ID);
        console.log(this.ID)
        // unityInstance.SendMessage("SetSessionDetails", "SessionDetails", JSON.stringify(sessionData));
        // unityInstance.SendMessage("PlayerBody", "SpawnAvatar", this.avatarVal);
        // unityInstance.SendMessage("AvatarHandler", "SpawnAvatar", this.avatarVal);
        // unityInstance.SendMessage("SetSessionDetails", "SessionDetails", JSON.stringify(userValues));
        // if(unityInstance.progress >= 1){
       // $(".basicloading").remove();
       // $("#background-video2").remove();
        // }
      }).catch((message) => {
        alert(message);
        console.log(message, "style realted mdg");
      });

    };
    document.body.appendChild(this.script);

    this.IsMobilePlatform = function (): boolean {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }
    window.IsMobilePlatform = this.IsMobilePlatform;
    // window.IsMobilePlatform = false;
    // window.IsMobilePlatform = () => {
    //   return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // }
    // window.IsMobilePlatform(() => {
    //   return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // });
  }

   unityShowBanner(msg, type) {
    function updateBannerVisibility() {
      this.warningBanner.style.display = this.warningBanner.children.length ? 'block' : 'none';
    }
    var div = document.createElement('div');
    div.innerHTML = msg;
    this.warningBanner.appendChild(div);
    if (type == 'error') div.style.background = 'red', div.style.padding='10px';
    else {
      if (type == 'warning') div.style.background = 'yellow', div.style.padding='10px';
      setTimeout(function() {
        this.warningBanner.removeChild(div);
        updateBannerVisibility();
      }, 5000);
    }
    updateBannerVisibility();
  }


}
