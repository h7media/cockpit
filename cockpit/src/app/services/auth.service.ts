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

}