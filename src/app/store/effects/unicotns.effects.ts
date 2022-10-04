import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Injectable()
export class UnicornsEffects {
  constructor(private actions$: Actions, private unicornsService: UnicornsService) {}

  /*  getUnicorns$ = createEffect(() => {
    return this.actions$.pipe(ofType());
  });*/
}
