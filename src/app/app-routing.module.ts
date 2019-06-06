import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ContentArea/app.Home';

import { AboutComponent } from './ContentArea/About/app.About';
import { ConnectComponent } from './ContentArea/Connect/app.Connect';
import { ServicesComponent } from './ContentArea/Services/app.Services';


const routes: Routes = [{ path: '', component: HomeComponent },

{ path: 'About', component: AboutComponent },
{ path: 'Connect', component: ConnectComponent },
{ path: 'Services', component: ServicesComponent },

{ path: '**', redirectTo: 'not-found' }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
