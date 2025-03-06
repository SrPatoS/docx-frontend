import { Component, inject, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { MatActionList, MatListItem, MatNavList } from '@angular/material/list';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../../services/local-storage.service';
import { environment } from '../../../environments/environment'; 
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-navigation-page',
  templateUrl: './navigation-page.component.html',
  styleUrl: './navigation-page.component.scss',
  imports: [MatMenuModule,MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatToolbar, MatIcon, MatNavList, MatListItem, RouterLink, MatExpansionPanelHeader, MatExpansionPanel, MatActionList, RouterOutlet]
})
export class NavigationPageComponent implements OnInit {
  user: IUser | null = null;
  router = inject(Router);

  constructor(
    private localStorageService: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    const userStorange = this.localStorageService.get('user');
    this.user = userStorange ? JSON.parse(userStorange) : null;
  }

  logout() {
    this.localStorageService.clear();
    this.user = null;
    this.router.navigate(['/login']);
  }
}
