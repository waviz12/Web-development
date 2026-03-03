import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="albums-page">
      <h1>Albums</h1>

      <p *ngIf="loading" class="loading">Loading albums...</p>

      <div *ngIf="!loading" class="album-list">
        <div *ngFor="let album of albums" class="album-item">
          <a [routerLink]="['/albums', album.id]" class="album-link">
            <span class="album-id">#{{ album.id }}</span>
            <span class="album-title">{{ album.title }}</span>
          </a>
          <button class="btn-delete" (click)="onDelete(album)">Delete</button>
        </div>
        <p *ngIf="albums.length === 0" class="empty">No albums found.</p>
      </div>
    </div>
  `,
  styles: [`
    .albums-page { padding: 20px 0; }
    h1 { font-size: 1.8rem; margin-bottom: 20px; color: #1976d2; }
    .loading { text-align: center; padding: 40px; color: #888; }
    .album-list { display: flex; flex-direction: column; gap: 6px; }
    .album-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: white;
      border-radius: 6px;
      padding: 10px 16px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      transition: box-shadow 0.2s;
    }
    .album-item:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.14);
    }
    .album-link {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
      min-width: 0;
    }
    .album-id {
      font-weight: 700;
      color: #1976d2;
      flex-shrink: 0;
      min-width: 36px;
    }
    .album-title {
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .btn-delete {
      flex-shrink: 0;
      background: #e53935;
      color: white;
      border: none;
      padding: 6px 14px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 600;
      margin-left: 12px;
      transition: background-color 0.2s;
    }
    .btn-delete:hover { background: #c62828; }
    .empty { text-align: center; color: #888; padding: 40px; }
  `]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data: Album[]) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onDelete(album: Album): void {
    this.albumService.deleteAlbum(album.id).subscribe({
      next: () => {
        this.albums = this.albums.filter((a: Album) => a.id !== album.id);
      },
      error: (err: unknown) => {
        console.error('Delete error', err);
      }
    });
  }
}
