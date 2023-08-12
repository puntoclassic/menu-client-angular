import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { AccountService } from "src/app/account/services/account.service";
import { FoodService } from "src/app/amministrazione/services/food.service";
import { CartService } from "src/app/cart/services/cart.service";

export const fakeFoodData = () => {
  //FOOD DATA
  spyOn(FoodService.prototype, "getFood").and.returnValue(of({
    name: "Pizza Margherita",
    id: 1,
    price: 4,
    ingredients: "pomodo, pozzarella, origano",
    categoryId: 1,
  }));

  spyOn(FoodService.prototype, "getFoodsByCategorySlug").and.returnValue(of([
    {
      name: "Pizza Margherita",
      id: 1,
      price: 4,
      ingredients: "pomodo, pozzarella, origano",
      category: {
        name: "Pizze",
        slug: "pizze",
      },
      categoryId: 1,
    },
  ]));

  spyOn(FoodService.prototype, "fetchFoods").and.returnValue(of([
    {
      name: "Pizza Margherita",
      id: 1,
      price: 4,
      ingredients: "pomodo, pozzarella, origano",
      categoryId: 1,
    },
  ]));

  spyOn(FoodService.prototype, "searchFoods").and.returnValue(of([
    {
      name: "Pizza Margherita",
      id: 1,
      price: 4,
      ingredients: "pomodo, pozzarella, origano",
      categoryId: 1,
    },
  ]));
};
