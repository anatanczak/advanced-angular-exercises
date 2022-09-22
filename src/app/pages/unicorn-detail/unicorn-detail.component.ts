import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-unicorn-detail',
  templateUrl: './unicorn-detail.component.html',
  styleUrls: ['./unicorn-detail.component.scss'],
})
export class UnicornDetailComponent {
  public id$ = this.activatedRoute.params.pipe(map(params => params['id']));
  constructor(private activatedRoute: ActivatedRoute) {}
}
