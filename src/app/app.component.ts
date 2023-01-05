import { Component } from "@angular/core";

@Component({
  // Décorateur typescript
  selector: "app-root", // dans notre page web , on inserera la balise <app-root> : définition d'une balise html personnalisé grace au standard composant web inclut dans angular
  //template: `<h1>Liste de Pokémons</h1>`, // code html qui sera associé à ce composant web, on peux aussi utiliser template-url si on met dans un fichier à part
  templateUrl: "app.component.html",
})
export class AppComponent {}
