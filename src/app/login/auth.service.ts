import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private validUser: boolean = false;

  constructor(private router: Router) { }

  login(user) {
    console.log(user)
    if (user.login == 'teste@email.com' &&
        user.password == '12345') {
          this.validUser = true;

          this.router.navigate(['/tasks'])
        } else {
          this.validUser = false;
        }
  }

  logout() {
    this.validUser = false;
    this.router.navigate(['/login']);
  }


}
