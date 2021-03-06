import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SidebarComponent } from "./components/home/sidebar/sidebar.component";
import { NewsComponent } from "./components/home/news/news.component";
import { TweetsComponent } from "./components/home/tweets/tweets.component";
import { AlertifyService } from "./services/alertify.service";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./Routes/routes";
import { LoginGuard } from './components/login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    NewsComponent,
    TweetsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes)],
  providers: [AlertifyService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
