import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const EMAIL_REGEXP = '^([a-zA-Z0-9_\\-\\.]+)@google\\.fr$';

@Component({
  selector: 'nat-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  public formulaire: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formulaire = new FormGroup({
      prenom: new FormControl('Paul'),
      nom: new FormControl('', Validators.required),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.pattern(EMAIL_REGEXP),
          Validators.required
        ]))
    });
  }

  public traiteFormulaire(valeur) {
    console.log('Formulaire soumis', valeur);
  }

}
