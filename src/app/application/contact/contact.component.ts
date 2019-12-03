import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup , FormArray, FormControl} from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}
  contactForm: FormGroup;

  public get nom() {
    return this.contactForm.get("nom");
  }
  public get lesPreferences(){
     return this.contactForm.get('preferences') as FormArray; 
    }
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      nom: ["", [Validators.required, Validators.minLength(8)]],
      email: ["", Validators.required],
      genre: ["Homme", Validators.required],
      region: ["Autre"],
      newsLetter: [true],
      preferences:this.formBuilder.array([])
    });
    
    this.contactForm.get("email").setValue("dsi@gmail.com");
  }
  onAjouterPreference() {
     this.lesPreferences.push(new FormControl(''));
   //Autre possibilité //this.lesPreferences.push(this.formBuilder.control('')); 
  }
  onContacter() {
    console.log(this.contactForm.value);
    console.log(this.contactForm.value["nom"]);
    console.log(this.contactForm.get("email").value);
    console.log(this.contactForm.value["genre"]);
    console.log(this.contactForm.value["region"]);
    console.log(this.contactForm.value["newsLetter"]);
  }
  onAccueil() {
    this.router.navigate(["/accueil"]);
  }
}
