import { createReducer, on } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { deleteUnicornSuccess, getUnicornsSuccess, getUnicornSuccess, updateUnicornSuccess } from '../actions/unicorns.actions';
const initialState: Unicorn[] = [];

export const unicornsReducer = createReducer(
  initialState,
  on(getUnicornsSuccess, (state, { unicorns }): Unicorn[] => unicorns),
  on(updateUnicornSuccess, (state, { unicorn }): Unicorn[] => state.map(u => (u.id === unicorn.id ? unicorn : u))),
  on(deleteUnicornSuccess, (state, { unicorn }): Unicorn[] => state.filter(u => u.id !== unicorn.id)),
  on(getUnicornSuccess, (state, { unicorn }) => {
    const unicornIsPresent = state.some(u => u.id === unicorn.id);
    if (unicornIsPresent) {
      return state.map(u => (u.id === unicorn.id ? unicorn : u));
    } else {
      return state.concat(unicorn);
    }
  })
);
