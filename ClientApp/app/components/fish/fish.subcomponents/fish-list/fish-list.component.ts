import { Livestock } from '../../../../models/livestock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'faf-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css']
})
export class FishListComponent implements OnInit {
  fishes = [
    {id: 1, name:"clownfish"},
    {id: 2, name:"pufferfish"},
    {id: 3, name:"damselfish"},
    {id: 4, name:"tang"},
    {id: 5, name:"gobby"},
    {id: 6, name:"angelfish"},
    {id: 7, name:"grouper"},
    {id: 8, name:"hawkfish"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
