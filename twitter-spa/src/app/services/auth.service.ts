import { Injectable } from "@angular/core";
import { UserLoginDto } from "../dto/userLoginDto";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { JwtHelper, tokenNotExpired } from "angular2-jwt";
import { Router } from "@angular/router";
import { AlertifyService } from "./alertify.service";
import { UserRegisterDto } from "../dto/userRegisterDto";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // Http Client ve Router constructor içinde tanımlanmalıdır.
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}

  apiUrl = "http://localhost:53842/api/auth/";
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper(); // jwt Helper methodlarına ulaşmak için tanımladık
  TOKEN_KEY = "token";

  login(loginUser: UserLoginDto) {
    // Login Action'a application/json formatında header gönderdik.
    let headers = new HttpHeaders();

    // Datayı JSON formatında istedik.
    headers = headers.append("Content-Type", "application/json");

    //Http Post ile API'deki login methoduna gönderme işlemi yaptık.
    this.httpClient
      .post(this.apiUrl + "login", loginUser, { headers: headers })
      .subscribe(data => {
        this.saveToken(data["tokenString"]);
        this.userToken = data["tokenString"];
        this.decodedToken = this.jwtHelper.decodeToken(data["tokenString"]); //Gelen Token'ı decode et.
        this.alertifyService.success("Welcome to Twitter!");
        this.router.navigateByUrl("./home");
      });
  }

  register(registerUser: UserRegisterDto) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient
      .post(this.apiUrl + "register", registerUser, { headers: headers })
      .subscribe(data => {});
  }

  //Login Yaparken Gelen Token'ı LocalStorage'e veritabanına kaydetmeli.
  saveToken(token) {
    localStorage.setItem("token", token);
  }

  // Tokenı Locale Silerek kullanıcının çıkışını sağlarız
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Kullanıcı Sisteme Login Durumunda olup olmadığını anlamak için yazılan metod.
  loggedIn() {
    // Kullanıcının tokenı olsa bile token süresi dolmuş olabilir.
    return tokenNotExpired(this.TOKEN_KEY);
  }

  // Property olarak var olan Tokenı getirme methodu
  get Token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  //Şuanki userin Id'sini getirme metodu.
  getCurrentUserId() {
    return this.jwtHelper.decodeToken(this.Token).nameid;
  }
}
