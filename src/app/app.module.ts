import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StatusComponent } from './status/status.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { name } from '../../package.json';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    MonitoringComponent,
    ConfigurationComponent,
    NavigationComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/' + name
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
