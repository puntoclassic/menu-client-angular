import { Component, inject, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AccountService } from "src/app/account/services/account.service";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType } from "src/types";

@Component({
  selector: "app-reset-password-page",
  templateUrl: "./reset-password-page.component.html",
  styleUrls: ["./reset-password-page.component.scss"],
})
export class ResetPasswordPageComponent implements OnInit {
  isPending: boolean;
  form: FormGroup;
  email: FormControl;

  constructor(
    formBuilder: FormBuilder,
    private accountService: AccountService,
    private appService: MessageService,
  ) {
    this.email = formBuilder.control("", {
      updateOn: "change",
      validators: [
        Validators.email,
        Validators.required,
      ],
    });

    this.form = formBuilder.group({
      email: this.email,
    });
  }

  ngOnInit(): void {
  }

  onFormSubmit(value: any) {
    if (this.form.valid) {
      this.isPending = true;
      this.accountService.resetPasswordEmail(value.email).subscribe(
        (result) => {
          if (result) {
            this.appService.pushMessage({
              type: MessageType.SUCCESS,
              text: "Controlla la tua casella di posta",
            });
          } else {
            this.appService.pushMessage({
              type: MessageType.ERROR,
              text: "Si è verificato un errore inaspettato",
            });
          }
          this.isPending = false;
        },
      );
    }
  }
}
