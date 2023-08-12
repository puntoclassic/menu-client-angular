import { Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { SettingsService } from "src/app/amministrazione/services/setting.service";
import { SettingFields } from "src/app/amministrazione/types";
import { CartService } from "src/app/cart/services/cart.service";
import { CartState, TipologiaConsegna } from "src/types";

@Component({
  selector: "app-riepilogo-ordine-page",
  templateUrl: "./riepilogo-ordine-page.component.html",
  styleUrls: ["./riepilogo-ordine-page.component.scss"],
})
export class RiepilogoOrdinePageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  noteControl: AbstractControl;
  cartState: CartState;
  cartStateSubscription: Subscription;
  settingsSubscription: Subscription;
  settings: SettingFields;
  items: any[];
  speseConsegnaItem: any;
  TipologiaConsegna: typeof TipologiaConsegna = TipologiaConsegna;

  constructor(
    private cartService: CartService,
    private router: Router,
    private formBuilder: FormBuilder,
    private settingService: SettingsService,
  ) {
    this.cartStateSubscription = this.cartService.cartStatus.subscribe(
      (cartState) => {
        this.cartState = cartState;
        this.items = Object.values(this.cartState.items);
      },
    );

    this.settingsSubscription = this.settingService.settings.subscribe(
      (settings: SettingFields) => {
        this.settings = settings;
        this.speseConsegnaItem = {
          item: {
            name: "Spese di consegna",
            price: parseFloat("" + this.settings.shippingCosts),
          },
          quantity: 1,
        };
      },
    );

    this.noteControl = this.formBuilder.control("");

    this.form = this.formBuilder.group({
      note: this.noteControl,
    });
  }

  ngOnDestroy(): void {
    this.cartStateSubscription.unsubscribe();
    this.settingsSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.noteControl.setValue(this.cartState.note);
  }

  onSubmit(value: { note: string }) {
    if (this.form.valid) {
      this.cartService.updateNote(value.note);
      this.router.navigate(["/checkout/creazioneOrdine"]);
    }
  }
}
