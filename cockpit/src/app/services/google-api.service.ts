import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthConfig, OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs/internal/Observable";

const oAuthConfig: AuthConfig = {
    issuer: 'https://accounts.google.com',
    strictDiscoveryDocumentValidation: false,
    redirectUri: window.location.origin,
    clientId: '74204654932-20i0797fatuit0u3nl2t32q789gidgfs.apps.googleusercontent.com',
    scope: 'openid profile email https://www.googleapis.com/auth/analytics.readonly'
}

@Injectable({
    providedIn: 'root'
})
export class GoogleApiService {

    private baseURL = 'https://analyticsreporting.googleapis.com/'
    private static accountNumber: number = 155733538

    constructor(private _oauthService: OAuthService, private httpClient: HttpClient) {

        _oauthService.configure(oAuthConfig)
        _oauthService.loadDiscoveryDocument().then(() => _oauthService.tryLoginImplicitFlow().then(() => {
            if (!_oauthService.hasValidAccessToken()) {
                _oauthService.initLoginFlow();
            }
            else
                _oauthService.loadUserProfile().then((user) => console.log("usuário: " + user))
        }))

    }

    getView(): Observable<any> {
        return this.httpClient.post(`${this.baseURL}v4/reports:batchGet`, {
            reportRequests: [
                {
                    viewId: '209071487',
                    dateRanges: [
                        {
                            startDate: '7daysAgo',
                            endDate: 'today'
                        }
                    ],
                    metrics: [
                        {
                            expression: 'ga:sessions'
                        }
                    ]
                }]
        }, { headers: this.authHeader() })
    }

    obtemContas() {
        return this.httpClient.get(`https://analyticsadmin.googleapis.com/v1beta/accounts`, { headers: this.authHeader() })
    }

    //alcance
    //engajamento
    //retenção
    //conversão
    obtemPropriedade(propriedade: string) {
        return this.httpClient.post(`https://analyticsreporting.googleapis.com/v4/reports:batchGet`, {
            reportRequests: [
              {
                viewId: "209071487",
                dateRanges: [
                  {
                    startDate: `${propriedade || '7days'}Ago`,
                    endDate: 'today'
                  }
                ],
                metrics: [
                  {
                    expression: 'ga:addToCarts'
                  },
                  {
                    expression: 'ga:transactionsPerSession'
                  },
                  {
                    expression: 'ga:costPerConversion'
                  },
                  {
                    expression: 'ga:transactionsPerSession'
                  }
                ]
              }
            ]
          }, { headers: this.authHeader() })
    }

    authHeader(): HttpHeaders {
        return new HttpHeaders({
            'Authorization': `Bearer ${this._oauthService.getAccessToken()}`
        })
    }



}