import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { catchError, map, throwError } from "rxjs";
import { CategoryService } from "src/app/amministrazione/services/category.service";
import { OrderStateService } from "src/app/amministrazione/services/order-state.service";
import { CreateOrderStateData } from "src/app/amministrazione/types";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType } from "src/types";

@Component({
  selector: "app-order-state-create-page",
  templateUrl: "./order-state-create-page.component.html",
  styleUrls: ["./order-state-create-page.component.scss"],
})
export class OrderStateCreatePageComponent implements OnInit {
  isPending: boolean = false;
  form: FormGroup;
  nomeControl: AbstractControl;
  cssBadgeClassControl: AbstractControl;

  constructor(
    private formBuilder: FormBuilder,
    private appService: MessageService,
    private router: Router,
    private orderStateService: OrderStateService,
  ) {
    this.nomeControl = this.formBuilder.control("", {
      validators: [
        Validators.required,
      ],
    });

    this.cssBadgeClassControl = this.formBuilder.control("", {});

    this.form = this.formBuilder.group({
      name: this.nomeControl,
      cssBadgeClass: this.cssBadgeClassControl,
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data: CreateOrderStateData) {
    if (this.form.valid) {
      this.isPending = true;

      this.orderStateService.createOrderState(data).pipe(
        map(() => {
          this.isPending = false;
          this.router.navigate(["/amministrazione/stati-ordine"])
            .then(() => {
              this.appService.pushMessage(
                {
                  type: MessageType.SUCCESS,
                  text: "Stato ordine creato con successo",
                },
              );
            });
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
