import { CartComponent } from './cart/cart.component';
import { CollectionComponent } from './collection/collection.component';
import { BillingComponent } from './billing/billing.component';
import { BookViewComponent } from './book-view/book-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  {path: 'search', component: SearchComponent},
  {path: 'search/:id', component: BookViewComponent},
  {path: ':id/buy', component: BillingComponent},
  {path: 'collection', component: CollectionComponent},
  {path:'cart',component: CartComponent},
  {path:'buy',component: BillingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
