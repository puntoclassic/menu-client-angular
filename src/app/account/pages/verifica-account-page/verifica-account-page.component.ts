import { Component, inject, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountService } from "src/app/account/services/account.service";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType } from "src/types";

@Component({
  selector: "app-verifica-account-page",
  templateUrl: "./verifica-account-page.component.html",
  styleUrls: ["./verifica-account-page.component.scss"],
})
export class VerificaAccountPageComponent implements OnInit {
  isPending: boolean;
  form: FormGroup;
  emailControl: FormControl;

  constructor(
    formBuilder: FormBuilder,
    private accountService: AccountService,
    private appService: MessageService,
  ) {
    this.emailControl = formBuilder.control("", {
      validators: [
        Validators.required,
        Validators.email,
      ],
    });

    this.form = formBuilder.group({
      email: this.emailControl,
    });
  }

  ngOnInit(): void {
  }

  onFormSubmit(value: any) {
    if (this.form.valid) {
      this.isPending = true;
      this.accountService.resendActivationEmail(value.email).subscribe(() => {
        this.appService.pushMessage({
          type: MessageType.SUCCESS,
          text: "Email inviata, controlla la tua casella di posta",
        });
        this.isPending = false;
      });
    }
  }
}
