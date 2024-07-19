import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Oauth2Guard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(){
    if (localStorage.getItem('currentUser') != null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
