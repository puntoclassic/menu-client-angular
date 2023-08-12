import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { catchError, map, throwError } from "rxjs";
import { FoodService } from "src/app/amministrazione/services/food.service";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType } from "src/types";

@Component({
  selector: "app-food-delete-page",
  templateUrl: "./food-delete-page.component.html",
  styleUrls: ["./food-delete-page.component.scss"],
})
export class FoodDeletePageComponent implements OnInit {
  nome: string;
  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private foodService: FoodService,
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
    this.foodService.getFood(this.id).pipe(
      map((response: { name: string; image_url?: string }) => {
        this.nome = response.name;
      }),
      catchError(() => {
        this.router.navigate(["/amministrazione/cibi"]);
        return throwError(() => new Error("badRequest"));
      }),
    ).subscribe();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  onSubmit(value: any) {
    this.foodService.deleteFood(this.id).pipe(map(
      () => {
        this.router.navigate(["/amministrazione/cibi"]).then(() => {
          this.appService.pushMessage({
            type: MessageType.SUCCESS,
            text: `Cibo ${this.nome} eliminato con successo`,
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
