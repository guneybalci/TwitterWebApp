import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tweet } from "../models/tweet";

@Injectable({
  providedIn: "root"
})
export class TweetsService {
  // API'e bağlanabilmek için; HttpClient yazılmalıdır.
  constructor(private httpClient: HttpClient) {}

  path = "http://localhost:53842/api/";

  getTweets(): Observable<Tweet[]> {
    return this.httpClient.get<Tweet[]>(this.path + "tweets");
  }
}
