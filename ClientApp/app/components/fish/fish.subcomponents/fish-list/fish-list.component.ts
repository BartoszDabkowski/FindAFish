import { FishService } from '../../../../services/fish.service';
import { Fish } from '../../../../models/fish';
import { Livestock } from '../../../../models/livestock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'faf-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css'],
  providers: [FishService]
})
export class FishListComponent implements OnInit {
  fishes: Fish[];
  
  constructor(private service : FishService) { 
    this.fishes = service.getAllFish();
  }

  ngOnInit() {
  }

}
