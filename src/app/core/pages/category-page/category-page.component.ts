import { HttpClient } from "@angular/common/http";
import {
  AfterContentInit,
  Component,
  DoCheck,
  Inject,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CategoryService } from "src/app/amministrazione/services/category.service";
import { FoodService } from "src/app/amministrazione/services/food.service";
import {
  SettingsService,
} from "src/app/amministrazione/services/setting.service";
import { MessageService } from "src/app/shared/services/message.service";

@Component({
  selector: "app-category-page",
  templateUrl: "./category-page.component.html",
  styleUrls: ["./category-page.component.scss"],
})
export class CategoryPageComponent implements OnInit, OnDestroy {
  slug: string;
  category?: any;
  foods?: any[];
  settings$ = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private categoryService: CategoryService,
    private foodService: FoodService,
    private settingService: SettingsService,
  ) {
    this.route.params.subscribe((params) => {
      this.slug = params["slug"];
      this.category = null;
      this.foods = null;
      this.initContent();
    });
  }

  initContent() {
    this.categoryService.getCategoryBySlug(this.slug).subscribe(
      (response) => {
        //set page title by category name

        this.settings$ = this.settingService.settings.subscribe(
          (settings: any) => {
            this.title.setTitle(
              response.name + " :: " + settings.siteName,
            );
          },
        );

        this.category = response;
      },
    );

    this.fetchFoods().subscribe((response) => {
      this.foods = response.items;
    });
  }

  ngOnInit(): void {
  }

  fetchFoods() {
    return this.foodService.getFoodsByCategorySlug(this.slug);
  }

  ngOnDestroy(): void {
    this.settings$.unsubscribe();
  }
}
