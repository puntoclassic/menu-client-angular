import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { catchError, map, Subscription, throwError } from "rxjs";
import { OrderStateService } from "src/app/amministrazione/services/order-state.service";
import { SettingsService } from "src/app/amministrazione/services/setting.service";
import { SettingFields } from "src/app/amministrazione/types";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType } from "src/types";

@Component({
  selector: "app-impostazioni-generali-page",
  templateUrl: "./impostazioni-generali-page.component.html",
  styleUrls: ["./impostazioni-generali-page.component.scss"],
})
export class ImpostazioniGeneraliPageComponent implements OnInit, OnDestroy {
  form: FormGroup;

  //FORM CONTROLS
  siteNameControl: AbstractControl;
  siteSubtitleControl: AbstractControl;
  shippingCostsControl: AbstractControl;
  orderCreatedStateControl: AbstractControl;
  orderPaidStateControl: AbstractControl;

  orderStates: any[];
  currentSettingSubscription: Subscription;
  isPending: boolean = false;

  constructor(
    private settingService: SettingsService,
    private formBuilder: FormBuilder,
    private orderStateService: OrderStateService,
    private appService: MessageService,
  ) {
    this.siteNameControl = this.formBuilder.control("", {
      validators: [
        Validators.required,
      ],
    });

    this.siteSubtitleControl = this.formBuilder.control("");

    this.shippingCostsControl = this.formBuilder.control("", {
      validators: [
        Validators.required,
        Validators.pattern(
          "\\d{1,3}[,.]?(\\d{1,2})?",
        ),
      ],
    });

    this.orderCreatedStateControl = this.formBuilder.control("", {
      validators: [
        Validators.required,
      ],
    });

    this.orderPaidStateControl = this.formBuilder.control("", {
      validators: [
        Validators.required,
      ],
    });

    this.form = this.formBuilder.group({
      siteName: this.siteNameControl,
      siteSubtitle: this.siteSubtitleControl,
      shippingCosts: this.shippingCostsControl,
      orderCreatedStateId: this.orderCreatedStateControl,
      orderPaidStateId: this.orderPaidStateControl,
    });

    this.currentSettingSubscription = this.settingService.settings.pipe(
      map((result: SettingFields) => {
        this.siteNameControl.setValue(result.siteName);
        this.siteSubtitleControl.setValue(result.siteSubtitle);
        this.shippingCostsControl.setValue(
          result.shippingCosts,
        );
        this.orderCreatedStateControl.setValue(result.orderCreatedStateId);
        this.orderPaidStateControl.setValue(result.orderPaidStateId);
      }),
    ).subscribe();

    this.orderStateService.getOrderStatesForSelect().pipe(
      map((result: any) => {
        this.orderStates = result.items;
      }),
    ).subscribe();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.currentSettingSubscription.unsubscribe();
  }

  onSubmit(data: SettingFields) {
    if (this.form.valid) {
      this.settingService.pushSettings(data).pipe(
        map(() => {
          this.isPending = false;
          this.appService.pushMessage({
            type: MessageType.SUCCESS,
            text: "Impostazioni aggiornate con successo",
          });
          this.settingService.fetchSettings();
        }),
        catchError(() => {
          this.isPending = false;
          this.appService.pushMessage({
            type: MessageType.ERROR,
            text: "Si è verificato un errore",
          });
          return throwError(() => new Error("badRequest"));
        }),
      ).subscribe();
    }
  }
}
