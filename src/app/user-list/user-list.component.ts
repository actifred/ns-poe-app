import { Component, OnInit } from '@angular/core';
import { UserManagerService } from '../services/user-manager.service';

@Component({
  selector: 'nat-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users = [];

  constructor(private userManager: UserManagerService) { }

  ngOnInit(): void {

  }

  public loadUsers() {
    this.userManager.getUsers(25)
        .subscribe(
            res => {
                this.users = res;
            },
            erreur => {
                console.log('ERREUR SUR LE GET', erreur);
            },
            () => {
                console.log('La requête est terminée');
            }
        )
  }

}
