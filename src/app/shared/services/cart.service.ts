import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UnicornWithCapacities } from './../models/unicorn.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems = new BehaviorSubject<Array<UnicornWithCapacities>>([]);
  constructor() {}

  public addUnicortToCart(unicorn: UnicornWithCapacities) {
    if (unicorn.id && !this.cartItems.getValue().find(existingUnicorn => existingUnicorn.id === unicorn.id)) {
      const unicorns = [...this.cartItems.getValue()];
      unicorns.push(unicorn);
      this.cartItems.next(unicorns);
    }
  }
}
