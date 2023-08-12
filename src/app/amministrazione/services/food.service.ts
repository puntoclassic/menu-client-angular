import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {
  CreateFoodData,
  FetchFoodRequest,
  UpdateFoodData,
} from "src/app/amministrazione/types";

@Injectable({
  providedIn: "root",
})
export class FoodService {
  foodResponse$: BehaviorSubject<{ foods: []; count: number }> =
    new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  fetchFoods(data: FetchFoodRequest) {
    return this.http.get("Api/Food/GetAll", {
      params: data,
    });
  }

  getFood(id: number) {
    return this.http.get("Api/Food/GetById/" + id);
  }

  getFoodsByCategorySlug(slug: string) {
    return this.http.get<any>("Api/Food/GetByCategorySlug/" + slug);
  }

  createFood(data: CreateFoodData) {
    data.price = parseFloat(data.price.toString().replace(",", "."));

    return this.http.post("Api/Food/PostCreateFood/", data);
  }

  searchFoods(search: string) {
    return this.http.get<any[]>("Api/Food/Search", {
      params: {
        search: search,
      },
    });
  }

  updateFood(id: number, data: UpdateFoodData) {
    data.id = id;
    data.price = parseFloat(data.price.toString().replace(",", "."));
    return this.http.post("Api/Food/PostUpdateFood/", data);
  }

  deleteFood(id: number) {
    return this.http.post("Api/Food/PostDeleteFood", {
      id: id,
    });
  }
}
