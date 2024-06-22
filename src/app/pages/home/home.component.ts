import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IntroductionComponent } from "./introduction/introduction.component";
import { EducationComponent } from "./education/education.component";
import { WorkComponent } from "./work/work.component";
import { WorkDevelopementComponent } from "./work-developement/work-developement.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { WorkPhotographyComponent } from "./work-photography/work-photography.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, IntroductionComponent, EducationComponent, WorkComponent, WorkDevelopementComponent, NavigationComponent, WorkPhotographyComponent]
})
export class HomeComponent {

} 