import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'it-company';

  sidenavOpen: boolean = false;

  onInstagram(): void {
    window.location.href = 'https://www.instagram.com';
  }

  onLinkedin(): void {
    window.location.href = 'https://ru.linkedin.com/';
  }

  onStartPage() {
    window.location.href = 'https://www.instagram.com';
  }

  onGoToTeamInfo() {
    window.location.href = 'https://www.instagram.com';
  }

  onGoToCompanyInfo() {
    window.location.href = 'https://www.instagram.com';
  }
}
