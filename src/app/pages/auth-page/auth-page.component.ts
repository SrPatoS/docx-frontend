import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackBarService } from '../../services/snack-bar.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  standalone: false,
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {
  form!: FormGroup;
  loading: boolean = false;
  error: string = '';
  errors: string[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBarService: SnackBarService,
    private localStorageService: LocalStorageService,
    private router: Router,

  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }


  login() {
    this.loading = true;
    this.http.post('/auth', this.form.value).subscribe((res: any) => {
      this.loading = false;
      this.localStorageService.save('authToken', res.data.token);
      this.http.get('/user').subscribe((response: any) => {
        const user = JSON.stringify(response.data);
        this.localStorageService.save('user', user);
        this.router.navigate(['/']);
      });
    }, (err) => {
      if (err.error.message) {
        this.error = err.error.message;
        this.errors = err.error.errors;
        this.snackBarService.show(err.error.message);
      }
      this.loading = false;
    });
  }
}
