import { Component, OnInit } from "@angular/core";
import { Tweet } from "src/app/models/tweet";
import { TweetsService } from "src/app/services/tweets.service";

@Component({
  selector: "app-tweets",
  templateUrl: "./tweets.component.html",
  styleUrls: ["./tweets.component.css"],
  providers: [TweetsService]
})
export class TweetsComponent implements OnInit {
  constructor(private tweetsService: TweetsService) {}

  tweets: Tweet[];

  ngOnInit() {
    this.tweetsService.getTweets().subscribe(data => {
      this.tweets = data;
    });
  }
}
