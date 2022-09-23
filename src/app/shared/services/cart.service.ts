import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UnicornWithCapacities } from './../models/unicorn.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItems = new BehaviorSubject<Array<UnicornWithCapacities>>([]);
  public cartItems = this._cartItems.asObservable();
  constructor() {}

  public addUnicortToCart(unicorn: UnicornWithCapacities) {
    if (unicorn.id && !this._cartItems.getValue().find(existingUnicorn => existingUnicorn.id === unicorn.id)) {
      this._cartItems.next([...this._cartItems.getValue(), unicorn]);
    }
  }
}
