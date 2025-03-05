import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-view',
  standalone: false,
  templateUrl: './error-view.component.html',
  styleUrl: './error-view.component.scss'
})
export class ErrorViewComponent {
  @Input() errors: string[] = [];
  @Input() title: string = '';
}
