import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

const EMAIL_REGEXP = '^([a-zA-Z0-9_\\-\\.]+)@google\\.fr$';

@Component({
  selector: 'nat-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  public formulaire = null;

  constructor(private fb: FormBuilder) {
    this.formulaire = this.fb.group({
      prenom: this.fb.control('Paul', this.champsPairEtPasTropLong),
      nom: this.fb.control('', Validators.compose([Validators.required, this.champsPairEtPasTropLong])),
      email: this.fb.control(
        '',
        Validators.compose([
          Validators.pattern(EMAIL_REGEXP),
          Validators.required
        ]))
    });
  }

  ngOnInit(): void {
  }

  private champsPairEtPasTropLong(controle) {
    let resultat:any = {};
    if ((controle.value.trim().length % 2) !== 0) {
      resultat.impair = true;
    }
    if (controle.value.trim().length > 8) {
      resultat.troplong = true;
    }
    console.log(`Le resultat du test pour ${controle.value} est `, resultat);
    return resultat;
  }

  public traiteFormulaire(valeur) {
    console.log('Formulaire soumis', valeur);
  }

}
