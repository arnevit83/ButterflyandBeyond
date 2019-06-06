
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { SignupComponent } from './Footer/app.Signup';
import { FooterComponent } from './Footer/app.Footer';
import { NavComponent } from './Nav/app.Nav';
import { PageNotFoundComponent } from './PageNotFound/app.PageNotFound';

import { HomeComponent } from './ContentArea/app.Home';

import { AboutComponent } from './ContentArea/About/app.About';
import { ConnectComponent } from './ContentArea/Connect/app.Connect';
import { ServicesComponent } from './ContentArea/Services/app.Services';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AboutComponent,
    ConnectComponent,
    ServicesComponent,
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    SignupComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    FontAwesomeModule,
    HttpClientModule ,
  //  ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
