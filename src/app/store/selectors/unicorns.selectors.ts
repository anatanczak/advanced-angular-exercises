import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';

// selectors
const selectUnicorns = createFeatureSelector<Unicorn[]>('unicorns');
const selectUnicorn = (id: number) => createSelector(selectUnicorns, (state: Unicorn[]) => state.find(u => u.id === id));

@Injectable({ providedIn: 'root' })
export class UnicornsSelectors {
  constructor(private store: Store) {}
  unicorns$ = this.store.select(selectUnicorns);
  unicorn$ = (id: number) => this.store.select(selectUnicorn(id));
}
