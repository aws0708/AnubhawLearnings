import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  commonValue$:Subject<string>=new Subject<string>;

  // behaviour Subject ko initial value dena padta hai
  commonValue2$:BehaviorSubject<string>=new BehaviorSubject<string>("");
  constructor() { }
}
