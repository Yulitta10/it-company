import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-company-team',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './company-team.component.html',
  styleUrl: './company-team.component.scss',
})
export class CompanyTeamComponent {
  control: FormControl = new FormControl('');
  items = [
    {
      name: 'Robert Brat',
      position: 'Сhief director',
      imageUrl: '../../assets/images/Robert_Brat.jpg',
    },
    {
      name: 'Alex Kreet',
      position: 'Director',
      imageUrl: '../../assets/images/Alex_Kreet.jpg',
    },
    {
      name: 'Alex Kreet',
      position: 'Director',
      imageUrl: '../../assets/images/Less_Trit.jpg',
    },
    {
      name: 'Alex Kreet',
      position: 'Director',
      imageUrl: '../../assets/images/Tessa_Adams.jpg',
    },
    {
      name: 'Alex Kreet',
      position: 'Director',
      imageUrl: '../../assets/images/Tom_Hard.jpg',
    },
    {
      name: 'Alex Kreet',
      position: 'Director',
      imageUrl: '../../assets/images/Tom_Tom.jpg',
    },
    {
      name: 'Alex Kreet',
      position: 'Director',
      imageUrl: '../../assets/images/Ryan_Peterson.jpg',
    },
    {
      name: 'Alex Kreet',
      position: 'Director',
      imageUrl: '../../assets/images/Stephanie_Mitchell.jpg',
    },
    {
      name: 'Alex Kreet',
      position: 'Director',
      imageUrl: '../../assets/images/Lauren_Morgan.jpg',
    },
    {
      name: 'Alex Kreet',
      position: 'Director',
      imageUrl: '../../assets/images/Brian_Thompson.jpg',
    },
  ];

  search() {
    this.items.filter((x) => x.name.includes(this.control.value));
  }
}
