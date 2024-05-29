import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IntroductionComponent } from "./introduction/introduction.component";
import { EducationComponent } from "./education/education.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, IntroductionComponent, EducationComponent]
})
export class HomeComponent {

} 