import { Component } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { TemplateComponent } from './template/template.component';

@Component({
  selector: 'app-temp-cont',
  standalone: true,
  imports: [TemplateComponent,ContainerComponent],
  templateUrl: './temp-cont.component.html',
  styleUrl: './temp-cont.component.css'
})
export class TempContComponent {

}
