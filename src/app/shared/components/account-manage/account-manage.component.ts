import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AccountService } from "src/app/account/services/account.service";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType } from "src/types";

@Component({
  selector: "app-account-manage",
  templateUrl: "./account-manage.component.html",
  styleUrls: ["./account-manage.component.scss"],
})
export class AccountManageComponent implements OnInit, OnDestroy {
  @HostBinding("class")
  classes = "flex";

  isLogged: boolean = false;
  userLogged = new Subscription();

  constructor(
    private accountService: AccountService,
    private appService: MessageService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.userLogged = this.accountService.userLogged$.subscribe(
      (status: boolean) => {
        this.isLogged = status;
      },
    );
  }

  ngOnDestroy(): void {
    this.userLogged.unsubscribe();
  }

  onLogoutClick() {
    this.accountService.logout().subscribe(() => {
      this.router.navigate(["/account/login"]).then(() => {
        this.appService.pushMessage({
          type: MessageType.INFO,
          text: "Ti sei disconnesso con successo",
        });
      });
    });
  }
}
