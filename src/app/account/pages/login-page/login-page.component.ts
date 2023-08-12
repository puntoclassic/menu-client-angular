import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AccountService } from "src/app/account/services/account.service";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType } from "src/types";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  isPending: boolean;
  loginForm: FormGroup;

  backUrlControl: FormControl;
  emailControl: FormControl;
  passwordControl: FormControl;

  constructor(
    formBuilder: FormBuilder,
    private accountService: AccountService,
    private appService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.backUrlControl = formBuilder.control({});
    this.emailControl = formBuilder.control("", {
      updateOn: "change",
      validators: Validators.compose([
        Validators.required,
        Validators.email,
      ]),
    });
    this.passwordControl = formBuilder.control("", {
      validators: [
        Validators.required,
      ],
    });

    this.loginForm = formBuilder.group({
      backUrl: this.backUrlControl,
      email: this.emailControl,
      password: this.passwordControl,
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.backUrlControl.setValue(params?.backUrl ?? null);
    });
  }

  ngOnInit(): void {
  }

  onLoginSubmit(value: { email: string; password: string; backUrl?: string }) {
    if (this.loginForm.valid) {
      this.isPending = true;
      this.accountService.login(value.email, value.password).subscribe(
        (data: any) => {
          switch (data.status) {
            case "success":
              if (data.verified) {
                const { user } = data;
                if (value.backUrl) {
                  this.router.navigate([value.backUrl], { replaceUrl: true })
                    .then();
                } else {
                  this.router.navigate(["/account"], { replaceUrl: true }).then(
                    () => {
                      this.appService.pushMessage({
                        type: MessageType.SUCCESS,
                        text: `Bentornato ${user.firstname} ${user.lastname}`,
                      });
                    },
                  );
                }
              } else {
                this.appService.pushMessage({
                  type: MessageType.INFO,
                  text: "Il tuo account non è attivo",
                });
              }
              break;
            case "failed":
              this.appService.pushMessage({
                type: MessageType.ERROR,
                text: "Accesso negato",
              });
              break;
          }
          this.isPending = false;
        },
      );
    }
  }
}
