import { TestBed } from "@angular/core/testing";
import { BACKEND_URL } from "src/app/shared/shared.module";

import { ApiServerInterceptor } from "./api-server.interceptor";

describe("ApiServerInterceptor", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: BACKEND_URL,
          useValue: "http://localhost:4000",
        },
        ApiServerInterceptor,
      ],
    })
  );

  it("should be created", () => {
    const interceptor: ApiServerInterceptor = TestBed.inject(
      ApiServerInterceptor,
    );

    expect(interceptor).toBeTruthy();
  });
});
