import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AppComponent } from "./app.component";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeTranslations } from "src/app/test/fakeTranslationsData";
import { Observable, of } from "rxjs";

class TestLanguageLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of({});
  }
}

describe("AppComponent", () => {
  beforeEach(async () => {
    fakeTranslations();
    fakeEmptyCartData();
    fakeGuestAccountData();
    fakeSettingsData();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TestLanguageLoader,
            deps: [HttpClient],
          },
        }),
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
