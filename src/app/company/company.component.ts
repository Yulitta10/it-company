import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent {
  images: string[] = [
    '../../assets/images/image1.jpg',
    '../../assets/images/image2.jpg',
    '../../assets/images/image3.jpg',
  ];
  currentImage = 0;

  currentIndex: number = 0;

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  showPrevious() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  navigate() {
    window.location.href = 'http://localhost:4200/team';
  }
}
