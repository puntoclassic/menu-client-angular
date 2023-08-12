import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { catchError, map, throwError } from "rxjs";
import { CategoryService } from "src/app/amministrazione/services/category.service";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType } from "src/types";

@Component({
  selector: "app-category-delete-page",
  templateUrl: "./category-delete-page.component.html",
  styleUrls: ["./category-delete-page.component.scss"],
})
export class CategoryDeletePageComponent implements OnInit {
  nome: string;
  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
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
    this.categoryService.getCategory(this.id).pipe(
      map((response: { name: string; image_url?: string }) => {
        this.nome = response.name;
      }),
      catchError(() => {
        this.router.navigate(["/amministrazione/categorie"]);
        return throwError(() => new Error("badRequest"));
      }),
    ).subscribe();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  onSubmit(value: any) {
    this.categoryService.deleteCategory(this.id).pipe(map(
      () => {
        this.router.navigate(["/amministrazione/categorie"]).then(() => {
          this.appService.pushMessage({
            type: MessageType.SUCCESS,
            text: `Categoria ${this.nome} eliminata con successo`,
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
