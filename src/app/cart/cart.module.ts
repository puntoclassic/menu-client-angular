import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarrelloContentComponent } from "src/app/cart/components/carrello-content/carrello-content.component";
import { CarrelloRowComponent } from "src/app/cart/components/carrello-row/carrello-row.component";
import { CassaButtonComponent } from "src/app/cart/components/cassa-button/cassa-button.component";
import { CarrelloPageComponent } from "src/app/cart/pages/carrello-page/carrello-page.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { TipologiaConsegnaPageComponent } from "./pages/tipologia-consegna-page/tipologia-consegna-page.component";
import { InformazioniConsegnaPageComponent } from "./pages/informazioni-consegna-page/informazioni-consegna-page.component";
import { RiepilogoOrdinePageComponent } from "./pages/riepilogo-ordine-page/riepilogo-ordine-page.component";
import { CartFilledGuard } from "src/app/cart/guards/cart-filled.guard";
import { LoginRequiredGuard } from "src/app/account/guards/login-required.guard";
import { CreazioneOrdinePageComponent } from "./pages/creazione-ordine-page/creazione-ordine-page.component";

const routes: Routes = [
  {
    path: "carrello",
    component: CarrelloPageComponent,
    title: "Carrello",
  },
  {
    path: "checkout",
    canActivate: [LoginRequiredGuard, CartFilledGuard],
    children: [
      {
        path: "tipologiaConsegna",
        component: TipologiaConsegnaPageComponent,
        title: "Tipologia consegna",
      },
      {
        path: "informazioniConsegna",
        component: InformazioniConsegnaPageComponent,
        title: "Informazioni consegna",
      },
      {
        path: "riepilogoOrdine",
        component: RiepilogoOrdinePageComponent,
        title: "Riepilogo",
      },
      {
        path: "creazioneOrdine",
        component: CreazioneOrdinePageComponent,
        title: "Creazione ordine in corso...",
      },
    ],
  },
];

@NgModule({
  declarations: [
    CarrelloPageComponent,
    CarrelloContentComponent,
    CarrelloRowComponent,
    CassaButtonComponent,
    TipologiaConsegnaPageComponent,
    InformazioniConsegnaPageComponent,
    RiepilogoOrdinePageComponent,
    CreazioneOrdinePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class CartModule {}
