import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";

import { CategoryService } from "./category.service";

describe("CategoryService", () => {
  let service: CategoryService;

  beforeEach(() => {
    fakeCategoryData();
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
    });
    service = TestBed.inject(CategoryService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
