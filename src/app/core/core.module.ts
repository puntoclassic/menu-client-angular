import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryPageComponent } from "src/app/core/pages/category-page/category-page.component";
import { CercaPageComponent } from "src/app/core/pages/cerca-page/cerca-page.component";
import { HomePageComponent } from "src/app/core/pages/home-page/home-page.component";
import { NotFoundPageComponent } from "src/app/core/pages/not-found-page/not-found-page.component";
import { SharedModule } from "src/app/shared/shared.module";

import { AccessoNegatoPageComponent } from "./pages/accesso-negato-page/accesso-negato-page.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomePageComponent,
    title: "Home",
  },
  {
    path: "categoria/:slug",
    component: CategoryPageComponent,
  },
  {
    path: "cerca",
    component: CercaPageComponent,
  },

  {
    path: "403",
    component: AccessoNegatoPageComponent,
    title: "403",
  },
  {
    path: "**",
    component: NotFoundPageComponent,
    title: "404",
  },
];

@NgModule({
  declarations: [
    HomePageComponent,
    CategoryPageComponent,
    CercaPageComponent,
    NotFoundPageComponent,
    AccessoNegatoPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CoreModule {}
