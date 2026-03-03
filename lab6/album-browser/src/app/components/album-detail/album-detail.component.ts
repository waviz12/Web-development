import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="detail-page">
      <p *ngIf="loading" class="loading">Loading album...</p>

      <div *ngIf="!loading && album" class="card">
        <h1>Album Details</h1>

        <div class="info">
          <div class="row"><span class="label">ID:</span> {{ album.id }}</div>
          <div class="row"><span class="label">User ID:</span> {{ album.userId }}</div>
        </div>

        <div class="edit-row">
          <label class="label" for="title">Title:</label>
          <input id="title" type="text" [(ngModel)]="editTitle" class="input-title" />
          <button class="btn-save" (click)="onSave()">Save</button>
        </div>

        <p *ngIf="message" class="message">{{ message }}</p>

        <div class="actions">
          <a [routerLink]="['/albums', album.id, 'photos']" class="btn btn-blue">View Photos</a>
          <a routerLink="/albums" class="btn btn-gray">Back</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .detail-page { padding: 20px 0; }
    .loading { text-align: center; padding: 40px; color: #888; }
    .card {
      background: white;
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      max-width: 600px;
    }
    h1 { font-size: 1.5rem; margin-bottom: 16px; color: #1976d2; }
    .info { margin-bottom: 16px; }
    .row { margin-bottom: 6px; }
    .label { font-weight: 700; margin-right: 6px; }
    .edit-row {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 8px;
    }
    .input-title {
      flex: 1;
      min-width: 200px;
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 0.95rem;
    }
    .btn-save {
      background: #43a047;
      color: white;
      border: none;
      padding: 8px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
    }
    .btn-save:hover { background: #388e3c; }
    .message { color: #43a047; font-weight: 600; margin-bottom: 12px; }
    .actions { display: flex; gap: 10px; margin-top: 20px; }
    .btn {
      padding: 10px 20px;
      border-radius: 4px;
      font-weight: 600;
      display: inline-block;
    }
    .btn-blue { background: #1976d2; color: white; }
    .btn-blue:hover { background: #1565c0; }
    .btn-gray { background: #757575; color: white; }
    .btn-gray:hover { background: #616161; }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  message = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data: Album) => {
        this.album = data;
        this.editTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onSave(): void {
    if (!this.album) { return; }
    const updated: Album = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        if (this.album) {
          this.album = { ...this.album, title: this.editTitle };
        }
        this.message = 'Title updated successfully!';
        setTimeout(() => { this.message = ''; }, 3000);
      },
      error: () => {
        this.message = 'Error updating album.';
      }
    });
  }
}
