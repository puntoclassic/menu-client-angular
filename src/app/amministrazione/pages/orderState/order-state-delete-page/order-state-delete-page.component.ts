import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { catchError, map, throwError } from "rxjs";
import { OrderStateService } from "src/app/amministrazione/services/order-state.service";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType } from "src/types";

@Component({
  selector: "app-order-state-delete-page",
  templateUrl: "./order-state-delete-page.component.html",
  styleUrls: ["./order-state-delete-page.component.scss"],
})
export class OrderStateDeletePageComponent implements OnInit {
  nome: string;
  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private orderStateService: OrderStateService,
    private appService: MessageService,
    private router: Router,
    private currentRoute: ActivatedRoute,
  ) {
    this.currentRoute.params.subscribe((params: Params) => {
      this.id = params.id;
    });

    this.form = this.formBuilder.group({});
  }

  fetchData() {
    this.orderStateService.getOrderState(this.id).pipe(
      map((response: any) => {
        this.nome = response.name;
      }),
      catchError(() => {
        this.router.navigate(["/amministrazione/impostazioni/statiOrdine"]);
        return throwError(() => new Error("badRequest"));
      }),
    ).subscribe();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  onSubmit(value: any) {
    this.orderStateService.deleteOrderState(this.id).pipe(map(
      () => {
        this.router.navigate(["/amministrazione/stati-ordine"])
          .then(() => {
            this.appService.pushMessage({
              type: MessageType.SUCCESS,
              text: `Stato ${this.nome} eliminato con successo`,
            });
          });
      },
      catchError(() => {
        this.router.navigate(["./"]);
        return throwError(() => new Error("badRequest"));
      }),
    )).subscribe();
  }
}
