import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { Assessment2Component } from './assessment2/assessment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginOrNewUserComponent } from './login-or-new-user/login-or-new-user.component';
import { NewFormCreationComponent } from './new-form-creation/new-form-creation.component';
import { SearchAndUpdateComponent } from './search-and-update/search-and-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Assessment2Component,
    Assignment3Component,
    HeaderComponent,
    DashboardComponent,
    LoginOrNewUserComponent,
    NewFormCreationComponent,
    SearchAndUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
