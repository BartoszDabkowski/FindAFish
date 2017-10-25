import { FishSubspecies } from '../../../../models/fishSubspecies';
import { Fish } from '../../../../models/fish';
import { FishService } from '../../../../services/fish.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'faf-fish-species-list',
  templateUrl: './fish-species-list.component.html',
  styleUrls: ['./fish-species-list.component.css'],
  providers: [FishService]
})
export class FishSpeciesListComponent implements OnInit {
  fishSubspecies: FishSubspecies[];
  
  constructor(private route: ActivatedRoute, private service : FishService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params["id"];
      this.fishSubspecies = this.service.getAllFishSubspecies(id);
    });
  }

}
