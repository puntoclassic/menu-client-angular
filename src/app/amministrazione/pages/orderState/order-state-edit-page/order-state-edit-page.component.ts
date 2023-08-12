import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { catchError, map, throwError } from "rxjs";
import { OrderStateService } from "src/app/amministrazione/services/order-state.service";
import { UpdateOrderStateData } from "src/app/amministrazione/types";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType } from "src/types";

@Component({
  selector: "app-order-state-edit-page",
  templateUrl: "./order-state-edit-page.component.html",
  styleUrls: ["./order-state-edit-page.component.scss"],
})
export class OrderStateEditPageComponent implements OnInit {
  isPending: boolean = false;
  form: FormGroup;
  nomeControl: AbstractControl;
  cssBadgeClassControl: AbstractControl;
  idControl: AbstractControl;

  constructor(
    private formBuilder: FormBuilder,
    private appService: MessageService,
    private router: Router,
    private orderStateService: OrderStateService,
    private currentRoute: ActivatedRoute,
  ) {
    this.nomeControl = this.formBuilder.control("", {
      validators: [
        Validators.required,
      ],
    });

    this.cssBadgeClassControl = this.formBuilder.control("", {});

    this.idControl = this.formBuilder.control("");

    this.form = this.formBuilder.group({
      id: this.idControl,
      name: this.nomeControl,
      cssBadgeClass: this.cssBadgeClassControl,
    });

    this.currentRoute.params.subscribe((params: Params) => {
      this.idControl.setValue(params.id);
    });
  }

  fetchData() {
    this.orderStateService.getOrderState(this.idControl.value).pipe(
      map((response: any) => {
        this.nomeControl.setValue(response.name);
        this.cssBadgeClassControl.setValue(response.cssBadgeClass);
      }),
      catchError(() => {
        this.router.navigate(["./"]);
        return throwError(() => new Error("badRequest"));
      }),
    ).subscribe();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  onSubmit(data: UpdateOrderStateData) {
    if (this.form.valid) {
      this.isPending = true;

      this.orderStateService.updateOrderState(data).pipe(
        map(() => {
          this.isPending = false;
          this.appService.pushMessage({
            type: MessageType.SUCCESS,
            text: "Stato ordine aggiornato con successo",
          });
          this.fetchData();
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
