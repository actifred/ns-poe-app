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
      prenom: new FormControl('Paul', this.champsPairEtPasTropLong),
      nom: new FormControl('', Validators.compose([Validators.required, this.champsPairEtPasTropLong])),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.pattern(EMAIL_REGEXP),
          Validators.required
        ]))
    });
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
