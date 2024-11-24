import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-control',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './switch-control.component.html',
  styleUrl: './switch-control.component.css'
})
export class SwitchControlComponent {
  dayNumber:string='';

}
