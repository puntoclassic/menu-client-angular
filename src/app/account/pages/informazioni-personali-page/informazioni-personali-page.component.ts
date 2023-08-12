import { Component, OnDestroy } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Subscription } from "rxjs";
import { AccountService } from "src/app/account/services/account.service";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType, PersonalInfoFields } from "src/types";

@Component({
  selector: "app-informazioni-personali-page",
  templateUrl: "./informazioni-personali-page.component.html",
  styleUrls: ["./informazioni-personali-page.component.scss"],
})
export class InformazioniPersonaliPageComponent implements OnDestroy {
  isPending: boolean = false;
  form: FormGroup;
  firstnameControl: FormControl;
  lastnameControl: FormControl;
  userSubscription: Subscription;

  constructor(
    private accountService: AccountService,
    private appService: MessageService,
    private formBuilder: FormBuilder,
  ) {
    this.firstnameControl = this.formBuilder.control("", {
      validators: [
        Validators.required,
        Validators.pattern(RegExp("^[a-zA-Z]")),
      ],
    });

    this.lastnameControl = this.formBuilder.control("", {
      validators: [
        Validators.required,
        Validators.pattern(RegExp("^[a-zA-Z]")),
      ],
    });

    this.form = this.formBuilder.group({
      firstName: this.firstnameControl,
      lastName: this.lastnameControl,
    });

    this.userSubscription = this.accountService.user$.subscribe((user) => {
      console.log(user);
      this.firstnameControl.setValue(user.firstname);
      this.lastnameControl.setValue(user.lastname);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onFormSubmit(data: PersonalInfoFields) {
    if (this.form.valid) {
      this.isPending = true;
      this.accountService.updatePersonalInfo(data).subscribe(
        (response) => {
          if (response) {
            this.appService.pushMessage({
              type: MessageType.SUCCESS,
              text: "Informazioni aggiornate con successo",
            });
            this.accountService.loadAccountState();
          } else {
            this.appService.pushMessage({
              type: MessageType.ERROR,
              text: "Impossibile aggiornare le informazioni",
            });
          }
          this.isPending = false;
        },
      );
    }
  }
}
