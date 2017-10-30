import { GenusService } from '../../services/genus.service';
import { SpeciesService } from '../../services/species.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species-form',
  templateUrl: './species-form.component.html',
  styleUrls: ['./species-form.component.css']
})
export class SpeciesFormComponent implements OnInit {
  genuses : any;
  constructor(private genusService : GenusService) { }

  ngOnInit() {
    this.genusService.getGenuses().subscribe(genus => {
      this.genuses = genus;
      console.log("GENUSES", this.genuses)
    });  
  }

}
