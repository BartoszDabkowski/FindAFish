import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SpeciesService {
    constructor(private http: Http) { }

    getSpecies() {
        return this.http.get('/api/species')
            .map(res => res.json());
    }
}