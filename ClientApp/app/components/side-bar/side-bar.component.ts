import { Fish } from '../../models/fish';
import { FishService } from '../../services/fish.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'faf-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  providers: [FishService]
})
export class SideBarComponent implements OnInit {
  public isCollapsed = false;
  fishes: Fish[];
  
  constructor(private service : FishService) { 
    this.fishes = service.getAllFish();
  }

  ngOnInit() {
  }
}
