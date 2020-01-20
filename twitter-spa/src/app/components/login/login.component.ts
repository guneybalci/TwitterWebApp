import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  userLoginDto: any = {};

  ngOnInit() {
    
  }

  //Kullanıcı Form Alanından Giriş Yapacak.
  login() {
    this.authService.login(this.userLoginDto);
  }

  //Kullanıcı Giriş Yaptıktan Sonra Çıkış Yapacak.
  logOut() {
    this.authService.logOut();
  }

  //Property(get) olarak yazılan Authentication mi? methodu.
  get isAuthenticated() {
    return this.authService.loggedIn();
  }
}
