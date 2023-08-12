import {
  AfterContentChecked,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { CategoryService } from "src/app/amministrazione/services/category.service";

@Component({
  selector: "app-category-list-page",
  templateUrl: "./category-list-page.component.html",
  styleUrls: ["./category-list-page.component.scss"],
})
export class CategoryListPageComponent implements OnInit {
  items: [];
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
  ];

  constructor(private categoryService: CategoryService) {
    this.itemsPerPage = parseInt(localStorage.getItem("itemsPerPage") ?? "5");
  }

  fetchData() {
    this.items = null;
    this.categoryService.fetchAdminCategories({
      ascending: this.ascending,
      perPage: this.itemsPerPage,
      orderBy: this.orderBy,
      page: this.currentPage,
      search: this.searchKey,
      paginated: true,
    }).subscribe((response: any) => {
      if (response != null) {
        this.items = response.items;
        this.count = response.count;
      }
    });
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
