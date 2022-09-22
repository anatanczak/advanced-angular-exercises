import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatAll, filter, forkJoin, map, Observable, tap, toArray } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Capacity } from './../models/capacity.model';
import { Unicorn, UnicornWithCapacities } from './../models/unicorn.model';
import { CapacitiesService } from './capacities.service';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  constructor(private readonly _http: HttpClient, private capacititesService: CapacitiesService) {}

  public getAll(): Observable<Unicorn[]> {
    return this._http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
  }

  public getSuperUnicorns(): Observable<Unicorn[]> {
    return this._http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`).pipe(
      tap(unicorns => {
        console.table(unicorns);
      }),
      concatAll(),
      filter((unicorn: Unicorn) => {
        return unicorn.weight > 100;
      }),
      map((unicorn: Unicorn) => {
        return { ...unicorn, name: unicorn.name.toUpperCase(), weight: unicorn.weight - 10 };
      }),
      toArray()
    );
  }

  public getAllWithCapacititesLabels(): Observable<UnicornWithCapacities[]> {
    return forkJoin([this.getAll(), this.capacititesService.getAll()]).pipe(
      map(([unicorns, capacities]) => {
        const newUnicorns = unicorns.map(unicorn => {
          const newCapacitites: Array<Capacity> = unicorn.capacities.map(
            capacity => capacities.find(cap => cap.id === capacity) as Capacity
          );
          return { ...unicorn, capacities: newCapacitites };
        });
        return newUnicorns;
      })
    );
  }
}
