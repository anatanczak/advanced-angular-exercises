import { ActionReducerMap } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { unicornsReducer } from './unicorns.reducer';

export interface EntityState {
  unicorns: Unicorn[];
  // cart: number[]; // only ids
}

export const reducers: ActionReducerMap<EntityState> = {
  unicorns: unicornsReducer,
  //cart: cartReducer,
  // add other reducers
};
