import { InjectionToken, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddToCartButtonComponent } from "src/app/shared/components/add-to-cart-button/add-to-cart-button.component";
import { CartButtonComponent } from "src/app/shared/components/cart-button/cart-button.component";
import { CategoryPillComponent } from "src/app/shared/components/category-pill/category-pill.component";
import { CategoryPillsComponent } from "src/app/shared/components/category-pills/category-pills.component";
import { FoodItemComponent } from "src/app/shared/components/food-item/food-item.component";
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { HomeButtonComponent } from "src/app/shared/components/home-button/home-button.component";
import { MessagesComponent } from "src/app/shared/components/messages/messages.component";
import { RowComponent } from "src/app/shared/components/row/row.component";
import { SearchFormComponent } from "src/app/shared/components/search-form/search-form.component";
import { TopbarLeftComponent } from "src/app/shared/components/topbar-left/topbar-left.component";
import { TopbarRightComponent } from "src/app/shared/components/topbar-right/topbar-right.component";
import { TopbarComponent } from "src/app/shared/components/topbar/topbar.component";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { RouterModule, TitleStrategy } from "@angular/router";
import { TemplatePageTitleStrategy } from "src/app/core/template-page-title-strategy";
import { ApiServerInterceptor } from "src/app/shared/api-server.interceptor";
import { AccountManageComponent } from "src/app/shared/components/account-manage/account-manage.component";
import { PriceOutputPipe } from "./pipes/price-output.pipe";
import { LoadingPageComponent } from "src/app/shared/components/loading-page/loading-page.component";
import { HeaderNavComponent } from "./components/header-nav/header-nav.component";
import { ButtonPendingComponent } from "./components/button-pending/button-pending.component";
import { TextInputDirective } from "./directives/text-input.directive";
import { FieldErrorsDirective } from "./directives/field-errors.directive";
import { SelectInputDirective } from "src/app/shared/directives/select-input.directive";

export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./Assets/Translations/", ".json");
}

export const BACKEND_URL = new InjectionToken<string>("BACKEND_URL");

@NgModule({
  declarations: [
    RowComponent,
    HomeButtonComponent,
    HeaderComponent,
    TopbarComponent,
    TopbarLeftComponent,
    TopbarRightComponent,
    RowComponent,
    CartButtonComponent,
    CategoryPillsComponent,
    CategoryPillComponent,
    MessagesComponent,
    FoodItemComponent,
    AddToCartButtonComponent,
    SearchFormComponent,
    AccountManageComponent,
    PriceOutputPipe,
    LoadingPageComponent,
    HeaderNavComponent,
    ButtonPendingComponent,
    TextInputDirective,
    FieldErrorsDirective,
    SelectInputDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiServerInterceptor,
      multi: true,
    },
    {
      provide: BACKEND_URL,
      useValue: "http://localhost:8081",
    },
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AccountManageComponent,
    RowComponent,
    HomeButtonComponent,
    HeaderComponent,
    TopbarComponent,
    TopbarLeftComponent,
    TopbarRightComponent,
    RowComponent,
    CartButtonComponent,
    CategoryPillsComponent,
    CategoryPillComponent,
    MessagesComponent,
    FoodItemComponent,
    AddToCartButtonComponent,
    SearchFormComponent,
    PriceOutputPipe,
    LoadingPageComponent,
    HeaderNavComponent,
    ButtonPendingComponent,
    TextInputDirective,
    FieldErrorsDirective,
    SelectInputDirective,
  ],
})
export class SharedModule {}
