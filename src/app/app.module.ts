import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { LayoutsModule } from './pages/layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { StoredetailsModule } from './pages/modules/registration/storedetails/storedetails.module';



// import { AccountComponent } from './pages/modules/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    // AccountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CarouselModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    StoredetailsModule
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy},SharedModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
