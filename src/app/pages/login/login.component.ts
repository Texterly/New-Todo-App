import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthGoogleService } from 'src/app/services/google-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private authService: AuthGoogleService) {}

  signInWithGoogle() {
    this.authService.login();
  }
}
