import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Capacity } from '../models/capacity.model';

@Injectable({
  providedIn: 'root',
})
export class CapacitiesService {
  constructor(private readonly _http: HttpClient) {}

  public getCapacityBy(id: number): Observable<Capacity> {
    return this._http.get<Capacity>(`${environment.apiUrl}/capacity${id}`);
  }

  public getAll(): Observable<Array<Capacity>> {
    return this._http.get<Array<Capacity>>(`${environment.apiUrl}/capacities`);
  }
}
