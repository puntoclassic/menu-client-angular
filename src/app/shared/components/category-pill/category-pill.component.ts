import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, Subscription } from "rxjs";

@Component({
  selector: "app-category-pill",
  templateUrl: "./category-pill.component.html",
  styleUrls: ["./category-pill.component.scss"],
})
export class CategoryPillComponent implements OnInit, OnDestroy {
  isCurrent: boolean;

  routeStream = new Subscription();

  @Input()
  item?: { id: number; name: string; slug: string };
  constructor(private router: Router) {
    this.routeStream = this.router.events.pipe(
      filter((f) => f instanceof NavigationEnd),
    )
      .subscribe(() => {
        this.updateIsCurrent();
      });
  }

  updateIsCurrent() {
    if (this.item) {
      this.isCurrent = this.router.url.endsWith(this.item.slug);
    }
  }

  ngOnDestroy(): void {
    this.routeStream.unsubscribe();
  }

  ngOnInit(): void {
    this.updateIsCurrent();
  }
}
