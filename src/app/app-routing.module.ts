import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornDetailComponent } from './pages/unicorn-detail/unicorn-detail.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';

const routes: Routes = [
  { path: '', component: UnicornListComponent },
  { path: 'unicorns', component: UnicornListComponent },
  { path: 'unicorn/:id', component: UnicornDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
