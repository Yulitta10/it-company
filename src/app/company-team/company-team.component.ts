import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-company-team',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterOutlet,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
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
      name: 'Less Trit',
      position: 'Product Manager',
      imageUrl: '../../assets/images/Less_Trit.jpg',
    },
    {
      name: 'Tessa Adams',
      position: 'HR manager',
      imageUrl: '../../assets/images/Tessa_Adams.jpg',
    },
    {
      name: 'Tom Hard',
      position: 'Frontent Developer',
      imageUrl: '../../assets/images/Tom_Hard.jpg',
    },
    {
      name: 'Tom Tom',
      position: 'Backend Developer',
      imageUrl: '../../assets/images/Tom_Tom.jpg',
    },
    {
      name: 'Ryan Peterson',
      position: 'QA',
      imageUrl: '../../assets/images/Ryan_Peterson.jpg',
    },
    {
      name: 'Stephanie Mitchell',
      position: 'Automation QA',
      imageUrl: '../../assets/images/Stephanie_Mitchell.jpg',
    },
    {
      name: 'Lauren Morgan',
      position: 'Project manager',
      imageUrl: '../../assets/images/Lauren_Morgan.jpg',
    },
    {
      name: 'Brian Thompson',
      position: 'Developers Team Lead',
      imageUrl: '../../assets/images/Brian_Thompson.jpg',
    },
  ];

  team = this.items;

  search() {
    if (this.control.value) {
      this.team = this.items.filter(
        (x) =>
          x.name.toLowerCase().includes(this.control.value.toLowerCase()) ||
          x.position.toLowerCase().includes(this.control.value.toLowerCase())
      );
      return;
    }

    this.team = this.items;
  }
}
