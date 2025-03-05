import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './pages/auth-page/auth-interceptor';
import { LocalStorageService } from './services/local-storage.service';
import { SnackBarService } from './services/snack-bar.service';
import { ErrorViewComponent } from './components/error-view/error-view.component';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CompanyToolPageComponent } from './pages/company-tool-page/company-tool-page.component';
import { PaginateListComponent } from './components/paginate-list/paginate-list.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatCell, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    ErrorViewComponent,
    CompanyToolPageComponent,
    PaginateListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardHeader,
    MatCardContent,
    MatCardModule,
    MatCard,
    ReactiveFormsModule,
    MatIcon,
    MatProgressBar,
    MatPaginator,
    MatHeaderCell,
    MatHeaderCellDef,
    MatTable,
    MatCell,
    MatColumnDef,
    MatSort
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    LocalStorageService,
    SnackBarService,
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
