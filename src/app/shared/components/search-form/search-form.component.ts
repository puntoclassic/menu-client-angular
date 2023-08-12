import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"],
})
export class SearchFormComponent implements OnInit {
  @HostBinding("class")
  classes = "row g-0 m-0";

  key: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params: Params) => {
      this.key = params.search ?? "";
    });
  }

  ngOnInit(): void {
  }

  onSearchButtonClick() {
    if (this.key !== "") {
      this.router.navigate(["/cerca"], {
        queryParams: {
          search: this.key,
        },
      });
    }
  }
}
