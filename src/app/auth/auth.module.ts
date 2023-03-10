import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { LogoutComponent } from './logout/logout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedLoginComponent } from './shared-login/shared-login.component';
import { RedirectComponent } from './redirect/redirect.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    CallbackComponent,
    LogoutComponent,
    SharedLoginComponent,
    RedirectComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class AuthModule { }
