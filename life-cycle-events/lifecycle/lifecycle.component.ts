import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LifecycledetailComponent } from '../lifecycledetail/lifecycledetail.component';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [LifecycledetailComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {
  name:string;
  // constructor(){
  //   this.name="Anubhaw Singh";
  //   console.log('CONSTRUCTOR');
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges');
  // }
  
  // ngOnInit(): void {
  //   console.log('ngOnInit'); 
  // }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck');  
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');  
  // }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit'); 
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked'); 
  // }

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }

}
