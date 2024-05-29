import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IntroductionComponent } from "./introduction/introduction.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, IntroductionComponent]
})
export class HomeComponent {

} 