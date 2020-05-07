import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserManagerService {
    constructor(private httpClient: HttpClient) {}

    public getUsers() {
        // Appel de la requete http sur randomuser
        // Retourne un observable
    }
}