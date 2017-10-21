import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavigationService {
  private messageSource = new BehaviorSubject<boolean>(true);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  toggleSidebar(toggle: boolean){
    this.messageSource.next(toggle);
  }
}