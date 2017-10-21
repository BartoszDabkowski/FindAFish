import { Livestock } from '../../models/livestock';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'faf-livestock-thumbnail',
  templateUrl: './livestock-thumbnail.component.html',
  styleUrls: ['./livestock-thumbnail.component.css']
})
export class LivestockThumbnailComponent implements OnInit {
  @Input('livestock') livestock : Livestock;

  constructor() { }

  ngOnInit() {
  }

}
