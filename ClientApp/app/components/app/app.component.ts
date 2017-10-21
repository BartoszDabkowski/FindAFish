import { Component } from '@angular/core';
import { NavigationService } from "../../services/navigation.service"

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ NavigationService ]
})
export class AppComponent {
    isShown: boolean;
    constructor(private data: NavigationService) { }
  
    ngOnInit() {
      this.data.currentMessage.subscribe(s => this.isShown = s);
      if(this.isShown){
  
      }
    }
}
