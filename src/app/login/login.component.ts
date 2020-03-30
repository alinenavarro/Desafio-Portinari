import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { User } from './user';
//import { PoPageLoginModule } from '@portinari/portinari-ui'
//import { PoPageLogin } from '@portinari/portinari-ui'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(PoPageLogin) {
    //console.log(this.user)
    //this.user.user = PoPageLogin.login
    //this.user.password = PoPageLogin.password
    this.authService.login(PoPageLogin);

  }

}

