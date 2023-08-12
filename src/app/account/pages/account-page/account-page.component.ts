import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AccountService } from "src/app/account/services/account.service";

@Component({
  selector: "app-account-page",
  templateUrl: "./account-page.component.html",
  styleUrls: ["./account-page.component.scss"],
})
export class AccountPageComponent implements OnInit, OnDestroy {
  user: any;
  userSubscrition: Subscription;

  constructor(private accountService: AccountService) {
    this.userSubscrition = this.accountService.user$.subscribe((value) => {
      this.user = value;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.userSubscrition.unsubscribe();
  }
}
