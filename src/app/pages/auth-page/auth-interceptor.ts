import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = environment.apiKey;
    const token = this.localStorageService.get('authToken');
    const clonedRequest = req.clone({
      setHeaders: {
        'api-key': apiKey,
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      url: `${environment.baseUrl}${req.url}`
    });

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.localStorageService.remove('authToken');
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
