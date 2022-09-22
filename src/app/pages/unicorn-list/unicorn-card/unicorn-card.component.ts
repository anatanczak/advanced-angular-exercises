import { Component, Input } from '@angular/core';
import { UnicornWithCapacities } from './../../../shared/models/unicorn.model';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent {
  @Input() unicorn!: UnicornWithCapacities;
  constructor() {}
  public addToCart() {}
}
