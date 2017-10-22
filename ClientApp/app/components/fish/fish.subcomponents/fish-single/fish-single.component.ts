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
  fish: Fish;
  constructor(private route: ActivatedRoute, private service : FishService) { }

  ngOnInit() {
    //this.route.paramMap['id'];

    this.route.params.subscribe(params => {
      let id = +params["id"];
      this.fish = this.service.getFish(id);
    });
  }

}
