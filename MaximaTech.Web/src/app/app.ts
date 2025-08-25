import { Component, signal, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App implements OnInit {
    protected readonly title = signal('MaximaTech');

    constructor(private router: Router) { }

    ngOnInit(): void {
        if (!localStorage.getItem('token'))
            this.router.navigate(['/login']);
    }

    isLogado(): boolean {
        return !!localStorage.getItem('token');
    }

    logout(): void {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
