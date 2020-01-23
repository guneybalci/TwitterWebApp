import { Component, OnInit } from "@angular/core";
import { Tweet } from "src/app/models/tweet";
import { TweetsService } from "src/app/services/tweets.service";
import { TweetForAdd } from "src/app/dto/tweetForAdd";
import { NgForm } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { UserTweetInfoDto } from 'src/app/dto/UserTweetInfoDto';

@Component({
  selector: "app-tweets",
  templateUrl: "./tweets.component.html",
  styleUrls: ["./tweets.component.css"],
  providers: [TweetsService,AuthService]
})
export class TweetsComponent implements OnInit {
  constructor(private tweetsService: TweetsService, private authService:AuthService) {}

  tweets: Tweet[] = [];
  usertweetinfodto:UserTweetInfoDto[] = [];
  addTweet: TweetForAdd = new TweetForAdd();

  ngOnInit() {
    this.tweetsService.getTweets().subscribe(data => {
      this.usertweetinfodto = data;
    });
  }

  add(form: NgForm) {
    this.addTweet.userIdFK = this.authService.getCurrentUserId();
    this.tweetsService.addTweet(this.addTweet).subscribe(savedTweet => {
      this.tweets.push(savedTweet);
    });
  }
}
