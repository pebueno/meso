import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatusComponent } from './status/status.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InfoModule } from './info/info.module';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MonitoringComponent } from './monitoring/monitoring.component';


export const routes: Routes = [
  { path: 'status', component: StatusComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: '404', component: NotfoundComponent },
  { path: '', redirectTo: '/status', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }


];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes), 
    InfoModule
  ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
