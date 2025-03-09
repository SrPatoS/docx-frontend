import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MatSidenav, MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatList, MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { NgForOf } from '@angular/common';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-navigation-page',
  templateUrl: './navigation-page.component.html',
  styleUrl: './navigation-page.component.scss',
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HeaderComponent,
    MatListItem,
    MatIcon,
    MatNavList,
    RouterOutlet,
    NgForOf,
    MatRipple
  ]
})
export class NavigationPageComponent {
  constructor(
    private router: Router
  ) {
  }


  menuItems = [
    { label: 'Home', icon: 'home', route: '/home' },
    { label: 'Configurações', icon: 'settings', route: '/settings' },
    { label: 'Ajuda', icon: 'help', route: '/help' }
  ];

  onMenuClick(item: any) {
    this.router.navigate([item.route]);
  }
}
