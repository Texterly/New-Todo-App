import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [],
  template: `
    <div class="button-back">
      <span>&#8592; Back</span>
    </div>
  `,
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {

}
