import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class UserManagerService {
    constructor(private httpClient: HttpClient) {}

    private users = [];

    public getUsers(limit: number): Observable<any> {
        return this.httpClient
            .get('https://randomuser.me/api/?results=' + limit)
            .pipe(
                map(
                    (res: any) => {
                        return res.results;
                    } 
                ),
                tap(resultat => {
                    this.users = resultat;
                    console.log('Le service a stocké en cache le tableau', this.users);
                })
            );
    }

    public getUserByUserName(username: string) {
        if (this.users.length === 0) {
            return null;
        }
        return this.users.find(
            (utilisateur) => {
                return utilisateur.login.username === username;
            }
        );
    }

    public getNextUser(username: string) {
        let nextUserIndex = -1;
        if (this.users.length === 0) {
            return null;
        }
        this.users.forEach( (user, index) => {
            if ( user.login.username === username) {
                nextUserIndex = index + 1;
            }
        });
        if (nextUserIndex > -1 && nextUserIndex < this.users.length) {
            return this.users[nextUserIndex];
        }
        return null;
    }
}