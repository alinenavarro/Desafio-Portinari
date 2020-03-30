// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { PoPageLoginModule, PoModalPasswordRecoveryModule } from '@portinari/portinari-templates';
import { AuthService } from './auth.service';
//import { PoLoginComponent } from '@portinari/portinari-ui';
//import { HttpClientModule } from '@angular/common/http';
//import { PoModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
 //   HttpClientModule,
   // PoModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule
    
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }