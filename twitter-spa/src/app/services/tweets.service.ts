import { Injectable } from "@angular/core";
import {HttpClient,HttpErrorResponse,HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Tweet } from "../models/tweet";
import { TweetForAdd } from "../dto/tweetForAdd";
import { tap, catchError } from "rxjs/operators";
import { UserTweetInfoDto } from '../dto/UserTweetInfoDto';

@Injectable({
  providedIn: "root"
})
export class TweetsService {
  // API'e bağlanabilmek için; HttpClient yazılmalıdır.
  constructor(private httpClient: HttpClient) {}

  path = "http://localhost:53842/api/";

  //Tüm Tweetleri Getirme İşlemi.
  getTweets(): Observable<UserTweetInfoDto[]> {
    return this.httpClient.get<UserTweetInfoDto[]>(this.path + "tweets");
  }

  //Yeni Tweet Atma İşlemi:
  addTweet(addTweet: TweetForAdd): Observable<Tweet> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Token"
      })
    };
    return this.httpClient
      .post<Tweet>(this.path +"tweets/add", addTweet, httpOptions)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  //Tweet Silme İşlemi
  // delTweet(id: number): Observable<TweetForAdd> {
  //   console.log(this.path + "/" + id);
  //   this.path.delete<TweetForAdd>(this.path + "/" + id);
  // }

  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu" + err.error.message;
    } else {
      errorMessage = "Sistemsel bir hata";
    }
    return throwError(errorMessage);
  }
}
