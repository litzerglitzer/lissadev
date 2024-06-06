import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work-photography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-photography.component.html',
  styleUrl: './work-photography.component.css'
})
export class WorkPhotographyComponent {
  skills: string[] = [
    'Wordpress',
    'SEO',
    'PageSpeed Insights',
    'Website-Design',
  ]

  photographerSkills: string[] = [
    'Lightroom',
    'Photoshop',
    'Kundengewinnung/Kundenkommunikation',
    'Canva',
    'Facebook Ads',
    'uvm.'
  ]
}
