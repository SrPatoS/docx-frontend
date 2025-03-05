import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatActionList, MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';

@Component({
  selector: 'app-navigation-page',
  templateUrl: './navigation-page.component.html',
  styleUrl: './navigation-page.component.scss',
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatToolbar, MatIcon, MatNavList, MatListItem, RouterLink, MatExpansionPanelHeader, MatExpansionPanel, MatActionList, RouterOutlet]
})
export class NavigationPageComponent {

}
