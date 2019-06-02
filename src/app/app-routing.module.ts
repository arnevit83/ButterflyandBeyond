import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ContentArea/app.Home';


const routes: Routes = [{ path: '', component: HomeComponent },


{ path: '**', redirectTo: 'not-found' }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
