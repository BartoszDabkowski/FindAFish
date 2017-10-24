import { FishService } from '../../services/fish.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css'],
  providers: [FishService]
})
export class FishComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
