import { Component, Input } from '@angular/core';
import { UnicornWithCapacities } from './../../../shared/models/unicorn.model';
import { CartService } from './../../../shared/services/cart.service';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent {
  @Input() unicorn!: UnicornWithCapacities;
  constructor(private cartService: CartService) {}
  public addToCart() {
    this.cartService.addUnicortToCart(this.unicorn);
  }
}
