import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="nav-brand">Album Browser</div>
      <ul class="nav-links">
        <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
        <li><a routerLink="/about" routerLinkActive="active">About</a></li>
        <li><a routerLink="/albums" routerLinkActive="active">Albums</a></li>
      </ul>
    </nav>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #1976d2;
      color: white;
      padding: 0 24px;
      height: 56px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .nav-brand {
      font-size: 1.3rem;
      font-weight: 700;
    }
    .nav-links {
      list-style: none;
      display: flex;
      gap: 4px;
      margin: 0;
      padding: 0;
    }
    .nav-links a {
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      transition: background-color 0.2s;
      font-weight: 500;
    }
    .nav-links a:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
    .nav-links a.active {
      background-color: rgba(255, 255, 255, 0.25);
    }
    .container {
      max-width: 1000px;
      margin: 24px auto;
      padding: 0 16px;
    }
  `]
})
export class AppComponent {}
