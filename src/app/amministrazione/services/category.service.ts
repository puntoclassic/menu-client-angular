import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import {
  CreateCategoryData,
  FetchCategoryRequest,
  UpdateCategoryData,
} from "src/app/amministrazione/types";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  categories = new BehaviorSubject<[]>([]);

  constructor(private http: HttpClient) {
    this.fetchCategories().subscribe((data: any) =>
      this.categories.next(data.items)
    );
  }

  fetchCategories() {
    return this.http.get<any>("Api/Category/GetAll", {
      params: {
        "paginated": false,
      },
    });
  }

  fetchAdminCategories(data: FetchCategoryRequest) {
    return this.http.get("Api/Category/GetAll", {
      params: data,
    });
  }

  getCategory(id: number) {
    return this.http.get("Api/Category/GetById/" + id);
  }

  getCategoryBySlug(slug: string) {
    return this.http.get<any>("Api/Category/GetBySlug/" + slug);
  }

  createCategory(data: CreateCategoryData) {
    var formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", data.image);

    return this.http.post("Api/Category/PostCreateCategory", formData);
  }

  updateCategory(id: number, data: UpdateCategoryData) {
    var formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", data.image);
    formData.append("id", "" + id);

    return this.http.post("Api/Category/PostUpdateCategory", formData);
  }

  deleteCategory(id: number) {
    return this.http.post("Api/Category/PostDeleteCategory", {
      id: id,
    });
  }
}
