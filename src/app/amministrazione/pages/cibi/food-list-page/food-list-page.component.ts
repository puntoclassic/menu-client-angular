import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { FoodService } from "src/app/amministrazione/services/food.service";

@Component({
  selector: "app-food-list-page",
  templateUrl: "./food-list-page.component.html",
  styleUrls: ["./food-list-page.component.scss"],
})
export class FoodListPageComponent implements OnInit {
  items: any[];
  searchKey: string = null;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  orderBy: string = "id";
  ascending: boolean = true;
  count: number = 0;
  isPending: boolean = true;
  orderVisible: boolean = true;
  filterColumns = [
    { label: "Id", name: "id" },
    { label: "Nome", name: "name" },
    { label: "Prezzo", name: "price" },
    { label: "Categoria", name: "category" },
  ];

  constructor(private foodService: FoodService) {
    this.itemsPerPage = parseInt(localStorage.getItem("itemsPerPage") ?? "5");
  }

  fetchData() {
    this.items = null;
    this.foodService.fetchFoods({
      ascending: this.ascending,
      perPage: this.itemsPerPage,
      orderBy: this.orderBy,
      page: this.currentPage,
      search: this.searchKey,
      paginated: true,
    }).subscribe(
      (response: any) => {
        this.items = response.items;
        this.count = response.count;
      },
    );
  }

  ngOnInit(): void {
    this.fetchData();
  }

  onItemsPerPageChange(value: number) {
    this.itemsPerPage = value;
    this.currentPage = 1;
    localStorage.setItem("itemsPerPage", "" + value);
    this.fetchData();
  }

  onSortTriggered(column: string) {
    if (this.orderBy != column) {
      this.orderBy = column;
      this.ascending = true;
    } else {
      this.ascending = !this.ascending;
    }
    this.fetchData();
  }

  onPageChange(value: number) {
    this.currentPage = value;
    this.fetchData();
  }

  onFormSearchEvent(value: string) {
    if (value != this.searchKey) {
      this.searchKey = value;
      this.currentPage = 1;
      this.fetchData();
    }
  }
}
