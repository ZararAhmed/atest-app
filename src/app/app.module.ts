import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Server } from './server/server.component';
import { Servers } from './servers/servers.component';
import { SuccessAlert } from './success-alert/success-alert.component';
import { WarningAlert } from "./warning-alert/warning-alert.component";
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlert,
    WarningAlert,
    Servers,
    Server,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
