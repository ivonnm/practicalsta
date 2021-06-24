import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { TotalComponent } from './components/total/total.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent
  },
  {
    path:'add',
    component: AddItemComponent
  },
  {
    path: '',
    component:HeaderComponent
  },
  {
    path: '',
    component:ShoppingItemComponent
  },
  {
    path: '',
    component:TotalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
