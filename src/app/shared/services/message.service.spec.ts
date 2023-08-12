import { TestBed } from "@angular/core/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";

import { MessageService } from "./message.service";

describe("MessageService", () => {
  let service: MessageService;

  beforeEach(() => {
    fakeCategoryData();
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
    });

    service = TestBed.inject(MessageService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
