import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { IUser } from '../../interfaces/user.interface';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { MatActionList } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDrawerContainer,
    MatDrawer,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNavList,
    MatListItem,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatActionList,
    RouterLink,
    RouterOutlet
  ]
})
export class HeaderComponent implements OnInit {
  user: IUser | null = null;

  @ViewChild(MatDrawer) drawer: MatDrawer | undefined;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    const userStorage = this.localStorageService.get('user');
    this.user = userStorage ? JSON.parse(userStorage) : null;
  }

  logout() {
    this.localStorageService.clear();
    this.user = null;
    this.router.navigate(['/login']);
  }

  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }
}
