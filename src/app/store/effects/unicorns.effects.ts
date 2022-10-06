import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UnicornsService } from '../../shared/services/unicorns.service';
import * as UnicornsActions from '../actions/unicorns.actions';

@Injectable()
export class UnicornsEffects {
  constructor(private actions$: Actions, private unicornsService: UnicornsService) {}

  getUnicorns$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnicornsActions.getUnicorns),
      switchMap(() =>
        this.unicornsService.getAll().pipe(
          map(unicorns => UnicornsActions.getUnicornsSuccess({ unicorns })),
          catchError(() => of(UnicornsActions.getUnicornsError()))
        )
      )
    );
  });

  getUnicorn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnicornsActions.getUnicorn),
      switchMap(action =>
        this.unicornsService.get(action.id).pipe(
          map(unicorn => UnicornsActions.getUnicornSuccess({ unicorn })),
          catchError(() => of(UnicornsActions.getUnicornError()))
        )
      )
    );
  });

  /*  updateUnicorn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnicornsActions.updateUnicorn),
      switchMap(action =>
        this.unicornsService.update(action.unicorn).pipe(
          map(unicorn => UnicornsActions.updateUnicornSuccess({ unicorn })),
          catchError(() => of(UnicornsActions.updateUnicornError()))
        )
      )
    );
  });*/

  deleteUnicorn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UnicornsActions.deleteUnicorn),
      switchMap(action =>
        this.unicornsService.delete(action.unicorn).pipe(
          map(() => UnicornsActions.deleteUnicornSuccess({ unicorn: action.unicorn })),
          catchError(() => of(UnicornsActions.deleteUnicornError()))
        )
      )
    );
  });
}
