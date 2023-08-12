import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CartService } from "src/app/cart/services/cart.service";
import { CartState } from "src/types";

@Component({
  selector: "app-informazioni-consegna-page",
  templateUrl: "./informazioni-consegna-page.component.html",
  styleUrls: ["./informazioni-consegna-page.component.scss"],
})
export class InformazioniConsegnaPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  indirizzoControl: AbstractControl;
  orarioControl: AbstractControl;
  cartState: CartState;
  cartStateSubscription: Subscription;

  constructor(
    private cartService: CartService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.cartStateSubscription = this.cartService.cartStatus.subscribe(
      (cartState) => {
        this.cartState = cartState;
      },
    );

    this.indirizzoControl = this.formBuilder.control("", [
      Validators.required,
    ]);

    this.orarioControl = this.formBuilder.control("", [
      Validators.required,
    ]);

    this.form = this.formBuilder.group({
      indirizzo: this.indirizzoControl,
      orario: this.orarioControl,
    }, {
      updateOn: "change",
    });
  }

  ngOnDestroy(): void {
    this.cartStateSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.indirizzoControl.setValue(this.cartState.indirizzo);
    this.orarioControl.setValue(this.cartState.orario);
  }

  onSubmit(value: { indirizzo: string; orario: string }) {
    if (this.form.valid) {
      this.cartService.updateIndirizzoOrario(value.indirizzo, value.orario);
      this.router.navigate(["/checkout/riepilogoOrdine"]);
    }
  }
}
