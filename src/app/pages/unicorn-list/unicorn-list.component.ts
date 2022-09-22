import { Component } from '@angular/core';
import { UnicornsService } from './../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorn-list',
  templateUrl: './unicorn-list.component.html',
  styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {
  public unicorns$ = this.unicornService.getAllWithCapacititesLabels();
  constructor(private unicornService: UnicornsService) {}
}
