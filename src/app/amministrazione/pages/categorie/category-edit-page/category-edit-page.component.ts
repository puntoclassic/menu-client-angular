import { Component, Inject, inject, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { catchError, map, throwError } from "rxjs";
import { CategoryService } from "src/app/amministrazione/services/category.service";
import { MessageService } from "src/app/shared/services/message.service";
import { BACKEND_URL } from "src/app/shared/shared.module";
import { MessageType } from "src/types";

@Component({
  selector: "app-category-edit-page",
  templateUrl: "./category-edit-page.component.html",
  styleUrls: ["./category-edit-page.component.scss"],
})
export class CategoryEditPageComponent implements OnInit {
  isPending: boolean = false;
  form: FormGroup;
  nomeControl: AbstractControl;
  immagineControl: AbstractControl;
  id: number;
  currentImageUrl?: string;
  private backendUrl = inject(BACKEND_URL);

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

    this.nomeControl = this.formBuilder.control("", {
      validators: [
        Validators.required,
      ],
    });

    this.immagineControl = this.formBuilder.control("", {});

    this.form = this.formBuilder.group({
      name: this.nomeControl,
      image: this.immagineControl,
    });
  }

  fetchData() {
    this.categoryService.getCategory(this.id).pipe(
      map((response: { name: string; image_url?: string }) => {
        this.nomeControl.setValue(response.name);
        this.currentImageUrl = response.image_url
          ? this.backendUrl + "/" + response.image_url
          : null;
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

  filePicked(event: any) {
    var file = event.target.files[0];
    this.immagineControl.clearValidators();

    if (file) {
      this.immagineControl.setErrors({
        fileTooBig: file.size > 1000 * 1000,
        badFileFormat: !["image/jpg", "image/jpeg", "image/png"].includes(
          file.type,
        ),
      });

      this.immagineControl.setValue(file);
    }
  }

  setIsPending(value) {
    this.isPending = value;
  }

  onSubmit(data: any) {
    if (this.form.valid) {
      this.isPending = true;
      this.categoryService.updateCategory(this.id, data).pipe(
        map(() => {
          this.isPending = false;
          this.appService.pushMessage({
            type: MessageType.SUCCESS,
            text: "Categoria aggiornata",
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
