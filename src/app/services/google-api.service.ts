// import { Injectable } from '@angular/core';
// import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
// import { Subject } from 'rxjs';

// const oAuthConfig: AuthConfig = {
//   issuer: 'https://accounts.google.com',
//   strictDiscoveryDocumentValidation: false,
//   redirectUri: window.location.origin,
//   clientId:
//     '994128956060-31910mm2aivkrh3rlmhrqb0j64kh47i9.apps.googleusercontent.com',
//   scope: 'openid profile email',
// };

// export interface UserInfo {
//   info: {
//     sub: string;
//     email: string;
//     name: string;
//     picture: string;
//   };
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class GoogleApiService {
//   userProfileSubject = new Subject<UserInfo>();

//   constructor(private readonly oAuthService: OAuthService) {
//     oAuthService.configure(oAuthConfig);
//     oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout';
//     oAuthService.loadDiscoveryDocument().then(() => {
//       oAuthService.tryLoginImplicitFlow().then(() => {
//         if (!oAuthService.hasValidAccessToken()) {
//           oAuthService.initLoginFlow();
//         } else {
//           oAuthService.loadUserProfile().then((userProfile) => {
//             this.userProfileSubject.next(userProfile as UserInfo);
//           });
//         }
//       });
//     });
//   }

//   isLoggedIn(): boolean {
//     return this.oAuthService.hasValidAccessToken();
//   }

//   signOut() {
//     this.oAuthService.logOut();
//   }
// }

import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {
  private oAuthService = inject(OAuthService);
  private router = inject(Router);

  constructor() {
    this.initConfiguration();
  }

  initConfiguration() {
    const authConfig: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId:
        '994128956060-25p6o2oqrqas5a22isqcips06rdotpvm.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/tasks',
      scope: 'openid profile email',
    };

    this.oAuthService.configure(authConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
  }

  getProfile() {
    const profile = this.oAuthService.getIdentityClaims();
    return profile;
  }

  getToken() {
    return this.oAuthService.getAccessToken();
  }
}
