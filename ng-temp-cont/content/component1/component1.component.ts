import { Component } from '@angular/core';
import { ReusablecomponentComponent } from '../reusablecomponent/reusablecomponent.component';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [ReusablecomponentComponent],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {

}
