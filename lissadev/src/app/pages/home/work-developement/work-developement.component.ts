import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work-developement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-developement.component.html',
  styleUrl: './work-developement.component.css'
})
export class WorkDevelopementComponent {
  skills: string[] = [
    'Angular',
    'Typescript',
    'Firebase',
    'NoSQL Database',
    'Firestore Database',
    'NoSQL Database',
    'CSS',
    'Database Architecture',
    'HTML',
  ]
}
