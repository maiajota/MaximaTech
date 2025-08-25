import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare const UIkit: any;

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class Login {
    username: string = '';
    password: string = '';

    constructor(private router: Router) { }

    onLogin() {
        if (this.username == 'admin' && this.password == '123') {
            localStorage.setItem('token', 'token-login');
            this.router.navigate(['/']);
        }
        else {
            UIkit.notification({
                message: 'Credenciais inválidas',
                status: 'danger',
                pos: 'bottom-center',
                timeout: 4000
            })
        }
    }
}
