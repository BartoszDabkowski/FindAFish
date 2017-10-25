import { FishSubspecies } from '../models/fishSubspecies';
import { Fish } from '../models/fish';
import { ANALYZE_FOR_ENTRY_COMPONENTS, Injectable } from '@angular/core';

@Injectable()
export class FishService {

  fishList: Fish[] = [
    {"id":1, "name":"Angel", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":2, "name":"Angler", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":3, "name":"Anthias", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":4, "name":"Basslet", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":5, "name":"Blennies", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":6, "name":"Boxfish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":7, "name":"Butterflyfish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":8, "name":"Cardinalfish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":9, "name":"Chromis", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":10, "name":"Clownfish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":11, "name":"Damselfish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":12, "name":"Dartfish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":13, "name":"Dottyback", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":14, "name":"Dragonetes", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":15, "name":"Eels", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":16, "name":"Filefish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":17, "name":"Foxface", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":18, "name":"Gobies", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":19, "name":"Groupers", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":20, "name":"Grunts", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":21, "name":"Hawkfish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":22, "name":"Hogfish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":23, "name":"Jawfish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":24, "name":"Lionfish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":25, "name":"Pipefish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":26, "name":"Puffers", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":27, "name":"Rays", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":28, "name":"Scorpions", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":29, "name":"Seahorses", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":30, "name":"Sharks", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":31, "name":"Squirrellfish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":32, "name":"Tangs", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":33, "name":"Triggerfish", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" },
    {"id":34, "name":"Wrasse", "imageUrl":"http://via.placeholder.com/250x200/24C4F9/ffffff" }
];

fishSubspeciesList: FishSubspecies[] = [
  {
    "speciesId": 1,
    "id": 1,
    "name": "Coral Beauty Angelfish",
    "imageUrl": "http://via.placeholder.com/1000x800/24C4F9/ffffff",
    "description": "description",
    "careLevel": "Easy",
    "temperment": "Semi-aggresive",
    "maxSize": 4,
    "diet": "Omnivore",
    "origin": "Fiji, Indonesia, Vanuatu",
    "family": "Pomacanthidae"
  },
  {
    "speciesId": 1,
    "id": 2,
    "name": "Flame Angelfish",
    "imageUrl": "http://via.placeholder.com/1000x800/24C4F9/ffffff",
    "description": "description",
    "careLevel": "Moderate",
    "temperment": "Semi-aggresive",
    "maxSize": 4,
    "diet": "Omnivore",
    "origin": "Cebu, Christmas Island, Marshall Islands, Vanuatu",
    "family": "Pomacanthidae"
  }
];

  constructor() { }

  getAllFish() : Fish[] {
    return this.fishList;
  }

  getFish(id: number) : Fish {
    return this.fishList[id - 1];
  }

  getAllFishSubspecies(speciesId: number){
    return this.fishSubspeciesList
      .filter(f => f.speciesId == speciesId);
  }

  getFishSubspecies(id: number){
    return this.fishSubspeciesList[id - 1];
  }
}