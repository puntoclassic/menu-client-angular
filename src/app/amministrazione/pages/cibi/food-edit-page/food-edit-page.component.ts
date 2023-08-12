import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormControlStatus,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { CategoryService } from "src/app/amministrazione/services/category.service";
import { FoodService } from "src/app/amministrazione/services/food.service";
import { UpdateFoodData } from "src/app/amministrazione/types";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType } from "src/types";

@Component({
  selector: "app-food-edit-page",
  templateUrl: "./food-edit-page.component.html",
  styleUrls: ["./food-edit-page.component.scss"],
})
export class FoodEditPageComponent implements OnInit {
  isPending: boolean = false;
  form: FormGroup;
  nomeControl: AbstractControl;
  ingredientsControl: AbstractControl;
  priceControl: AbstractControl;
  categoryControl: AbstractControl;
  categorySubscription: Subscription;
  categories: [];
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private foodService: FoodService,
    private appService: MessageService,
    private router: Router,
    private currentRoute: ActivatedRoute,
  ) {
    this.currentRoute.params.subscribe((params: Params) => {
      this.id = params.id;
    });

    this.categorySubscription = this.categoryService.fetchAdminCategories(
      {
        paginated: false,
      },
    ).subscribe(
      (response: any) => {
        this.categories = response.items;
      },
    );

    this.nomeControl = this.formBuilder.control("", {
      validators: [
        Validators.required,
      ],
    });

    this.ingredientsControl = this.formBuilder.control("");

    this.priceControl = this.formBuilder.control("", {
      validators: [
        Validators.required,
        Validators.pattern(
          "\\d{1,3}[,.]?(\\d{1,2})?",
        ),
        Validators.min(0.01),
      ],
    });

    this.categoryControl = this.formBuilder.control("", {
      validators: [
        Validators.required,
      ],
    });

    this.form = this.formBuilder.group({
      name: this.nomeControl,
      ingredients: this.ingredientsControl,
      price: this.priceControl,
      categoryId: this.categoryControl,
    });
  }

  ngOnDestroy(): void {
    this.categorySubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.fetchData().subscribe();
  }

  fetchData() {
    return this.foodService.getFood(this.id).pipe(
      map((response: any) => {
        this.nomeControl.setValue(response.name);
        this.ingredientsControl.setValue(response.ingredients);
        this.priceControl.setValue(parseFloat(response.price).toFixed(2));
        this.categoryControl.setValue(response.categoryId);
      }),
      catchError(() => {
        this.router.navigate(["./"]);
        return throwError(() => new Error("badRequest"));
      }),
    );
  }

  onSubmit(data: UpdateFoodData) {
    if (this.form.valid) {
      this.isPending = true;
      this.foodService.updateFood(this.id, data).pipe(
        map(() => {
          this.isPending = false;

          this.appService.pushMessage({
            type: MessageType.SUCCESS,
            text: "Cibo aggiornato con successo",
          });

          this.fetchData().subscribe();
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
