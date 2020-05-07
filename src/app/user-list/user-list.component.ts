import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nat-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  public loadUsers() {
    this.httpClient
        .get('https://randomuser.me/api/?results=20')
        .subscribe(
            (res: any) => {
                this.users = res.results;
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
