import { Injectable } from '@angular/core';
import {Cow} from './Cow';
import { Observable, of } from 'rxjs';
import { Cows } from './fake-cows';

@Injectable({
  providedIn: 'root'
})
export class CowService {

  constructor() { }
  getCows(): Observable<Cow[]>{
    return of(Cows); 
  }

  getCow(id: number): Observable<Cow | undefined>{
    return of(Cows.find(cow => cow.id === id));
  }
  
}
