import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  userLoginDto: any = {};

  ngOnInit() {}

  //Kullanıcı Giriş Yaptıktan Sonra Çıkış Yapacak.
  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl("login");
  }

  //Property(get) olarak yazılan Authentication mi? methodu.
  get isAuthenticated() {
    return this.authService.loggedIn();
  }
}
