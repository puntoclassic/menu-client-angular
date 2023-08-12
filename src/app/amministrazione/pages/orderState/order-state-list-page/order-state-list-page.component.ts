import { Component, OnInit } from "@angular/core";
import { OrderStateService } from "src/app/amministrazione/services/order-state.service";

@Component({
  selector: "app-order-state-list-page",
  templateUrl: "./order-state-list-page.component.html",
  styleUrls: ["./order-state-list-page.component.scss"],
})
export class OrderStateListPageComponent implements OnInit {
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
  ];

  constructor(private orderStateService: OrderStateService) {
    this.itemsPerPage = parseInt(localStorage.getItem("itemsPerPage") ?? "5");
  }

  fetchData() {
    this.items = null;
    this.orderStateService.fetchOrderStates({
      ascending: this.ascending,
      perPage: this.itemsPerPage,
      orderBy: this.orderBy,
      page: this.currentPage,
      search: this.searchKey,
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
