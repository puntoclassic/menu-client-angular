import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginRequiredGuard } from "src/app/account/guards/login-required.guard";
import { AccountPageComponent } from "src/app/account/pages/account-page/account-page.component";
import { LoginPageComponent } from "src/app/account/pages/login-page/login-page.component";
import { SigninPageComponent } from "src/app/account/pages/signin-page/signin-page.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ChangePasswordPageComponent } from "src/app/account/pages/change-password-page/change-password-page.component";
import { InformazioniPersonaliPageComponent } from "src/app/account/pages/informazioni-personali-page/informazioni-personali-page.component";
import { ResetPasswordPageComponent } from "src/app/account/pages/reset-password-page/reset-password-page.component";
import { ResetPasswordTokenPageComponent } from "src/app/account/pages/reset-password-token-page/reset-password-token-page.component";
import { VerificaAccountPageComponent } from "src/app/account/pages/verifica-account-page/verifica-account-page.component";
import { VerificaAccountTokenPageComponent } from "src/app/account/pages/verifica-account-token-page/verifica-account-token-page.component";
import { AnonymousRequiredGuard } from "src/app/account/guards/anonymous-required.guard";
import { AccountPageAdminLinksComponent } from "./components/account-page-admin-links/account-page-admin-links.component";
import { DashboardButtonLinkComponent } from "./components/dashboard-button-link/dashboard-button-link.component";
import { IMieiOrdiniPageComponent } from "./pages/i-miei-ordini-page/i-miei-ordini-page.component";
import { MyOrderCardComponent } from "./components/my-order-card/my-order-card.component";
import { OrdineDetailPageComponent } from "./pages/ordine-detail-page/ordine-detail-page.component";

export const routes: Routes = [
  {
    path: "account",
    children: [
      {
        path: "",
        component: AccountPageComponent,
        canActivate: [LoginRequiredGuard],
        title: "Il mio account",
      },
      {
        path: "login",
        component: LoginPageComponent,
        title: "Accedi",
        canActivate: [AnonymousRequiredGuard],
      },
      { path: "signin", component: SigninPageComponent, title: "Crea account" },
      {
        path: "verifica-account",
        component: VerificaAccountPageComponent,
        title: "Verifica account",
      },
      {
        path: "verifica-account/token",
        component: VerificaAccountTokenPageComponent,
        title: "Verifica account",
      },
      {
        path: "reset-password",
        component: ResetPasswordPageComponent,
        title: "Recupera password",
      },
      {
        path: "reset-password/token",
        component: ResetPasswordTokenPageComponent,
        title: "Recupera password",
      },
      {
        path: "cambia-password",
        component: ChangePasswordPageComponent,
        title: "Cambia password",
        canActivate: [LoginRequiredGuard],
      },
      {
        path: "informazioni-personali",
        component: InformazioniPersonaliPageComponent,
        title: "Informazioni personali",
        canActivate: [LoginRequiredGuard],
      },
      {
        path: "i-miei-ordini",
        canActivate: [LoginRequiredGuard],
        children: [
          {
            path: "",
            component: IMieiOrdiniPageComponent,
            title: "I miei ordini",
          },
          {
            path: ":id",
            component: OrdineDetailPageComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [
    AccountPageComponent,
    ChangePasswordPageComponent,
    InformazioniPersonaliPageComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    ResetPasswordTokenPageComponent,
    SigninPageComponent,
    VerificaAccountPageComponent,
    VerificaAccountTokenPageComponent,
    AccountPageAdminLinksComponent,
    DashboardButtonLinkComponent,
    IMieiOrdiniPageComponent,
    MyOrderCardComponent,
    OrdineDetailPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AccountModule {}
