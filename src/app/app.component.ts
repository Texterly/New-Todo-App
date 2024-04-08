import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from './services/google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private authService: AuthGoogleService, private router: Router) {}
  title = 'todo-app';

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
