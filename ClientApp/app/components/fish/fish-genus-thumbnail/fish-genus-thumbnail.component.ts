import { Fish } from '../../../models/fish';


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'faf-fish-genus-thumbnail',
  templateUrl: './fish-genus-thumbnail.component.html',
  styleUrls: ['./fish-genus-thumbnail.component.css']
})
export class FishGenusThumbnailComponent implements OnInit {
  @Input('fish') fish : Fish;

  constructor() { }

  ngOnInit() {
  }

}
