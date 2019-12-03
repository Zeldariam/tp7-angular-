import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ProduitsService } from "../produits.service";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-plus-produit",
  templateUrl: "./plus-produit.component.html",
  styleUrls: ["./plus-produit.component.css"]
})
export class PlusProduitComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl("", Validators.required),
    libelle: new FormControl("", [
      Validators.required,
      Validators.pattern("[A-Z][a-zA-Z]+")
    ])
  });

  public get idProduct() { return this.productForm.get('id'); }
  message: string;
  submitted: boolean = false;
  constructor(private produitsService: ProduitsService) {}

  onSubmitForm() {
    console.log(this.productForm.value["id"]);
    console.log(this.productForm.get("libelle").value);
    this.submitted = true;

    const ajout = this.produitsService.addProduit(
      this.productForm.value["id"],
      this.productForm.get("libelle").value
    );
    if (ajout)
      this.message =
        "Votre nouveau produit:" +
        this.productForm.get("libelle").value +
        " a bien été ajouté";
    else
      this.message =
        "Le produit d'id " + this.productForm.value["id"] + " existe déjà !";
  }

  ngOnInit() {}
}
