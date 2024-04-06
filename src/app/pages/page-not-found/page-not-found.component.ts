import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `
    <h2 class="text-center">404</h2>
    <h4 class="text-center">Page not found</h4>
    <a href="/">Back to app</a>
  `,
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {

}
