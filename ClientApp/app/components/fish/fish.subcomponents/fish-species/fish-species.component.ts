import { ActivatedRoute } from '@angular/router';
import { FishService } from '../../../../services/fish.service';
import { FishSubspecies } from '../../../../models/fishSubspecies';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'faf-fish-species',
  templateUrl: './fish-species.component.html',
  styleUrls: ['./fish-species.component.css'],
  providers: [FishService]
})
export class FishSpeciesComponent implements OnInit {
  fishSubspecies: FishSubspecies;
  constructor(private route: ActivatedRoute, private service: FishService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params["id"]
      let speciesId = +params["speciesId"]

      this.fishSubspecies = this.service.getFishSubspecies(id);
    });

    
  }

}
