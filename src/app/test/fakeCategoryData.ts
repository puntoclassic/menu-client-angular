import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { AccountService } from "src/app/account/services/account.service";
import { CategoryService } from "src/app/amministrazione/services/category.service";
import { FoodService } from "src/app/amministrazione/services/food.service";
import { CartService } from "src/app/cart/services/cart.service";

export const fakeCategoryData = () => {
  spyOn(CategoryService.prototype, "getCategory").and.returnValue(of([
    {
      id: 1,
      name: "Pizze",
    },
  ]));
  spyOn(CategoryService.prototype, "getCategoryBySlug").and.returnValue(of(
    {
      id: 1,
      name: "Pizze",
    },
  ));
  spyOn(CategoryService.prototype, "fetchCategories").and.returnValue(of([
    {
      id: 1,
      name: "Pizze",
    },
  ]));
  spyOn(CategoryService.prototype, "fetchAdminCategories").and.returnValue(of([
    {
      id: 1,
      name: "Pizze",
    },
  ]));
};
