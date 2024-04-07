import { ChangeDetectionStrategy, Component } from '@angular/core';
// import { GoogleApiService, UserInfo } from './services/google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'todo-app';

  // userInfo?: UserInfo;

  // constructor(private readonly googleApi: GoogleApiService) {
  //   googleApi.userProfileSubject.subscribe((info) => {
  //     this.userInfo = info;
  //   });
  // }

  // isLoggedIn(): boolean {
  //   return this.googleApi.isLoggedIn();
  // }

  // logout() {
  //   this.googleApi.signOut();
  // }
}
