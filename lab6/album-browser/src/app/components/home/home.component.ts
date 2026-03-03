import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home">
      <h1>Welcome to Album Browser</h1>
      <p>
        Browse, view, edit and delete albums from the JSONPlaceholder API.
        This application demonstrates Angular routing, HTTP services, and CRUD operations.
      </p>
      <a routerLink="/albums" class="btn-primary">Browse Albums</a>
    </div>
  `,
  styles: [`
    .home {
      text-align: center;
      padding: 60px 20px;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 16px;
      color: #1976d2;
    }
    p {
      max-width: 550px;
      margin: 0 auto 28px;
      font-size: 1.05rem;
      color: #555;
    }
    .btn-primary {
      display: inline-block;
      background-color: #1976d2;
      color: white;
      padding: 12px 28px;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 600;
      transition: background-color 0.2s;
    }
    .btn-primary:hover {
      background-color: #1565c0;
    }
  `]
})
export class HomeComponent {}
