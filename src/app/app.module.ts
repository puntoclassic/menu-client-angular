import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { RouterModule } from "@angular/router";

import { SharedModule } from "src/app/shared/shared.module";
import { CoreModule } from "src/app/core/core.module";
import { AccountModule } from "src/app/account/account.module";
import { AmministrazioneModule } from "src/app/amministrazione/amministrazione.module";
import { CartModule } from "src/app/cart/cart.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CartModule,
    AccountModule,
    AmministrazioneModule,
    CoreModule,
    RouterModule.forRoot([]),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
