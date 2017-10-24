import { ActivatedRoute } from '@angular/router';
import { FishService } from '../../../../services/fish.service';
import { FishSubspecies } from '../../../../models/fishSubspecies';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fish-subspecies',
  templateUrl: './fish-subspecies.component.html',
  styleUrls: ['./fish-subspecies.component.css'],
  providers: [FishService]
})
export class FishSubspeciesComponent implements OnInit {
  fishSubspecies: FishSubspecies;
  constructor(private route: ActivatedRoute, private service: FishService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params["id"]
      let speciesId = +params["speciesId"]
      console.log(id, speciesId);
      this.fishSubspecies = this.service.getFishSubspecies(id);
    });

    
  }

}
