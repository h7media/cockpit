import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService, private _ngZone: NgZone, private router: Router) { }

  ngOnInit(): void {
    //@ts-ignore
    window.onGoogleLibraryLoad = () => {
      //@ts-ignore
      google.accounts.id.initialize({
        client_id: "74204654932-aad5irlv4mpdmg0251e1hnsrfrbes0tu.apps.googleusercontent.com",
        callback: this.handleCredentialResponse.bind(this)
      });
      //@ts-ignore
      google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      //@ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => { }); // also display the One Tap dialog
    }
  }

  handleCredentialResponse(response: CredentialResponse) {
    console.log("🚀 ~ file: login.component.ts:35 ~ LoginComponent ~ handleCredentialResponse ~ response", response)
    console.log('entrou')
    this._auth.LoginWithGoogle(response.credential);
    this._ngZone.run(() => {
      this.router.navigate(['/dash']);
    })
  }

}
