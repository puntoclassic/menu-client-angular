import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Route, Router } from "@angular/router";
import { AccountService } from "src/app/account/services/account.service";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType } from "src/types";

@Component({
  selector: "app-verifica-account-token-page",
  templateUrl: "./verifica-account-token-page.component.html",
  styleUrls: ["./verifica-account-token-page.component.scss"],
})
export class VerificaAccountTokenPageComponent implements OnInit {
  token?: string;
  email?: string;

  constructor(
    private accountService: AccountService,
    private appService: MessageService,
    private router: Router,
    private currentRoute: ActivatedRoute,
  ) {
    this.currentRoute.queryParams.subscribe((params: Params) => {
      this.token = params.token;
      this.email = params.email;
    });
  }

  ngOnInit(): void {
    if (this.token) {
      this.accountService.activateAccount(this.token, this.email).subscribe(
        (value: boolean) => {
          this.router.navigate(["/account/login"]).then(() => {
            if (value) {
              this.appService.pushMessage({
                type: MessageType.SUCCESS,
                text: "Il tuo account è attivo",
              });
            } else {
              this.appService.pushMessage({
                type: MessageType.ERROR,
                text: "Richiesta non valida",
              });
            }
          });
        },
      );
    } else {
      this.router.navigate(["/account/login"]).then(() => {
        this.appService.pushMessage({
          type: MessageType.ERROR,
          text: "Richiesta non valida",
        });
      });
    }
  }
}
