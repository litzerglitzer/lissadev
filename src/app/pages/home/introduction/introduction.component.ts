import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {

  skills: string[] = [
    'Angular',
    'Typescript',
    'CSS',
    'Java',
    'Firebase',
    'HTML',
    'SQL'
  ]

}
