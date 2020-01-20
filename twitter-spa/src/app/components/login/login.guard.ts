import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = this.authService.loggedIn();

    if (logged) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
