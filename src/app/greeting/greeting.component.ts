import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterOutlet],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
})
export class GreetingComponent {
  getStarted() {
    window.location.href = 'http://localhost:4200/company';
  }
}
