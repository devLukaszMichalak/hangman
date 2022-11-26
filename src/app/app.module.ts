import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import {FormsModule} from "@angular/forms";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlaygroundComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          registrationStrategy: 'registerImmediately'
        })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
