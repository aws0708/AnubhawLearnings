import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  userName: string = "Anubhaw Singh";
  isLoggedIn: boolean;
  buttonText: string='LogIn';

  logMethod() {
    this.isLoggedIn = !this.isLoggedIn;
    this.buttonText = this.isLoggedIn ? 'LogOut' : 'LogIn';
  }

}
