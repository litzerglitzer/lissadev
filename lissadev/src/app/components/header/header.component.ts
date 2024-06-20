import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {OverlayModule} from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, OverlayModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpen = false;

  toggleOverlay() {
    console.log("Icon clicked");
    this.isOpen = !this.isOpen;
  }
}
