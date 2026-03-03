import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="photos-page">
      <div class="header">
        <h1>Album #{{ albumId }} — Photos</h1>
        <a [routerLink]="['/albums', albumId]" class="btn-back">Back</a>
      </div>

      <p *ngIf="loading" class="loading">Loading photos...</p>

      <div *ngIf="!loading" class="grid">
        <div *ngFor="let photo of photos" class="photo-card">
          <img [src]="getImageUrl(photo.id)" [alt]="photo.title" />
          <p class="title">{{ photo.title }}</p>
        </div>
        <p *ngIf="photos.length === 0" class="empty">No photos found.</p>
      </div>
    </div>
  `,
  styles: [`
    .photos-page { padding: 20px 0; }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 12px;
    }
    h1 { font-size: 1.5rem; color: #1976d2; }
    .btn-back {
      background: #757575;
      color: white;
      padding: 8px 18px;
      border-radius: 4px;
      font-weight: 600;
    }
    .btn-back:hover { background: #616161; }
    .loading { text-align: center; padding: 40px; color: #888; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 14px;
    }
    .photo-card {
      background: white;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .photo-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .photo-card img { width: 100%; display: block; }
    .title {
      padding: 6px 8px;
      font-size: 0.75rem;
      color: #666;
      line-height: 1.3;
    }
    .empty { text-align: center; color: #888; padding: 40px; grid-column: 1 / -1; }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId = 0;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data: Photo[]) => {
        this.photos = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getImageUrl(photoId: number): string {
    return `https://picsum.photos/seed/${photoId}/150/150`;
  }
}
