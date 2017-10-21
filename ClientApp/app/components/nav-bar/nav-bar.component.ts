import { NavigationService } from '../../services/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'faf-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isSideBarShown: boolean;
  constructor(private data: NavigationService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(s => this.isSideBarShown = s);
  }

  toggleSidebar(){
    this.data.toggleSidebar(!this.isSideBarShown);
  }
}
