import { Component, inject, model } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule]
})
export class UserComponent {
  router = inject(Router);
  httpClient = inject(HttpClient);
  formBuilder = inject(FormBuilder);
  userCreated: IUser = {} as IUser;
  selectedFile: File | null = null;

  formUserNoAvatar = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    uniqueCode: [0, [Validators.required]],
    companyId: ['', [Validators.required]],
    rule: ['', [Validators.required]]
  })

  createUserNoAvatar() {
    this.httpClient.post<IUser>(`${environment.baseUrl}/user`, this.formUserNoAvatar.value).subscribe((response: IUser) => {
      this.userCreated = response;
    })
  }

  onChangeFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadAvatar() {
    if (!this.selectedFile || !this.userCreated._id) {
      console.error('Arquivo ou usuário não definido!');
      return;
    }
  
    const formData = new FormData();
    const userId = this.userCreated._id;
    const image = this.selectedFile as File;
    const model = 'user';
  
    formData.append('_id', userId);
    formData.append('model', model);
    formData.append('image', image);
  
    this.httpClient.post(`${environment.baseUrl}/upload/avatar`, formData).subscribe({
      next: (response) => {
        console.log('Avatar enviado com sucesso!', response);
      },
      error: (error) => {
        console.error('Erro ao enviar avatar!', error);
      }
    });
  }
  
}
