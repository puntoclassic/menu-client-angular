import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/app/account/services/order.service";

@Component({
  selector: "app-order-list-page",
  templateUrl: "./order-list-page.component.html",
  styleUrls: ["./order-list-page.component.scss"],
})
export class OrderListPageComponent implements OnInit {
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
    { label: "Nominativo", name: "user" },
    { label: "Totale", name: "total" },
  ];

  constructor(private orderService: OrderService) {
    this.itemsPerPage = parseInt(localStorage.getItem("itemsPerPage") ?? "5");
  }

  fetchData() {
    this.items = null;
    this.orderService.getAll({
      ascending: this.ascending,
      perPage: this.itemsPerPage,
      orderBy: this.orderBy,
      page: this.currentPage,
      search: this.searchKey,
      paginated: true,
    }).subscribe((response: any) => {
      if (response != null) {
        console.log(response);
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

  onPageChange(value: number) {
    this.currentPage = value;
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

  onFormSearchEvent(value: string) {
    if (value != this.searchKey) {
      this.searchKey = value;
      this.currentPage = 1;
      this.fetchData();
    }
  }
}
