import { FishSubspecies } from '../../../../models/fishSubspecies';
import { Fish } from '../../../../models/fish';
import { FishService } from '../../../../services/fish.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish-single',
  templateUrl: './fish-single.component.html',
  styleUrls: ['./fish-single.component.css'],
  providers: [FishService]
})
export class FishSingleComponent implements OnInit {
  fishSubspecies: FishSubspecies[];
  
  constructor(private route: ActivatedRoute, private service : FishService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params["id"];
      this.fishSubspecies = this.service.getAllFishSubspecies(id);
    });
  }

}
