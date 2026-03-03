import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about">
      <h1>About</h1>
      <div class="card">
        <h2>Album Browser Application</h2>
        <p>
          Built as part of <strong>Lab 6: Routing &amp; HTTP</strong> for the
          Web Development course.
        </p>
        <table>
          <tr><td class="label">Student</td><td>Daniyar</td></tr>
          <tr><td class="label">Course</td><td>Web Development</td></tr>
          <tr><td class="label">Lab</td><td>Lab 6 — Routing, HTTP &amp; Services</td></tr>
          <tr><td class="label">Framework</td><td>Angular 17+ (Standalone)</td></tr>
          <tr><td class="label">API</td><td>JSONPlaceholder</td></tr>
        </table>
        <p>
          The app demonstrates Angular Router, HttpClient, service layer architecture,
          Observables, TypeScript interfaces, and CRUD operations.
        </p>
      </div>
    </div>
  `,
  styles: [`
    .about { padding: 20px 0; }
    h1 { font-size: 1.8rem; margin-bottom: 20px; color: #1976d2; }
    .card {
      background: white;
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .card h2 { margin-bottom: 12px; }
    .card p { margin-bottom: 16px; color: #555; }
    table { margin-bottom: 16px; border-collapse: collapse; }
    td { padding: 6px 16px 6px 0; }
    .label { font-weight: 700; color: #333; }
  `]
})
export class AboutComponent {}
