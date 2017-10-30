import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GenusService {
    constructor(private http: Http) { }
    
        getGenuses() {
            return this.http.get('/api/genuses')
                .map(res => res.json());
        }
}