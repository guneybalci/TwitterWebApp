import { Routes } from "@angular/router";
import { LoginComponent } from "../components/login/login.component";
import { HomeComponent } from "../components/home/home.component";
import { LoginGuard } from '../components/login/login.guard';

export const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate:[LoginGuard] },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];
