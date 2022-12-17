import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class AuthService {



    constructor() { }

    public signOutExternal = () => {
        localStorage.removeItem("token");
        console.log("token deleted")
    }

    LoginWithGoogle(credentials: string): void {
        localStorage.setItem("token", credentials);
    }

    estaLogado(): boolean {
        return localStorage.getItem("token") != null;
    }

    obtemToken(): string {
        return localStorage.getItem("token") || '';
    }

}