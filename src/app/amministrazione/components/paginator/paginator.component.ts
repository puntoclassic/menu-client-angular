import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input()
  count: number = 0;

  @Input()
  currentPage: number = 1;

  @Input()
  perPage: number = 5;

  @Output()
  onPageChangeEvent: EventEmitter<number> = new EventEmitter();

  numberOfPages: number[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    var pages = Math.ceil(this.count / this.perPage);

    this.numberOfPages = Array(pages > 0 ? pages : 1).fill(null)
      .map((el, index) => index + 1);
  }

  ngOnInit(): void {
  }

  pageChange(value: number) {
    this.onPageChangeEvent.emit(value);
  }
}
