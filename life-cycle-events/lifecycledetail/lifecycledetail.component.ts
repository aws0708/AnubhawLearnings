import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-lifecycledetail',
  standalone: true,
  imports: [CommonModule,DemoComponent],
  templateUrl: './lifecycledetail.component.html',
  styleUrl: './lifecycledetail.component.css'
})
export class LifecycledetailComponent {

  inputVal: string;
  toDestroy: boolean = false;
  constructor(){
    console.log('LifeCycleDetail Component constructor called!');
  }

  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit Hook of AppComponent called');
  // }
  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked Hook of AppComponent called');
  // }

  onBtnClicked(inputEl: HTMLInputElement){
      this.inputVal = inputEl.value;
  }

  DestroyComponent(){
    this.toDestroy = !this.toDestroy;
  }

}
