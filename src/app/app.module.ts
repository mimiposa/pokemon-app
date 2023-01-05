import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokemonModule } from "./pokemon/pokemon.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule, 
    PokemonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent], // propriété qui sera déclarer que dans le module racine, déclaration du composant point d'entrée
})
export class AppModule {}
