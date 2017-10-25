import { FishService } from '../../../../services/fish.service';
import { Fish } from '../../../../models/fish';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'faf-fish-genus-list',
  templateUrl: './fish-genus-list.component.html',
  styleUrls: ['./fish-genus-list.component.css'],
  providers: [FishService]
})
export class FishGenusListComponent implements OnInit {
  fishes: Fish[];
  
  constructor(private service : FishService) { 
    this.fishes = service.getAllFish();
  }

  ngOnInit() {
  }

}
